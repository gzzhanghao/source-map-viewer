<template>
  <div :class="$.app">
    <Tips />

    <Nav
      :panels="panels"
      :enabled-panels="enabledPanels"
      @goto="onGoto"
      @toggle="onTogglePanel"
    />

    <div :class="$.container">
      <SourcePanel
        v-for="item in panels"
        v-show="!item.hidden && enabledPanels[item.name]"
        :class="$.panel"
        :key="item.name"
        :ref="item.name"
        :content="item.content"
        :highlighted="highlighted"
        :line-number="item.lineNumber"
        @hover="onHoverNode"
        @upload="onUpload($event, item.name)"
        @scroll="onPanelScroll($event, item.name)"
        @select="onSelectNode($event, item.name)"
        @mouseover="onMouseOver($event, item.name)"
      >
        <div :class="$.promoteText">{{item.promoteText}}</div>
        <div v-if="item.promoteTips" :class="$.promoteTips">{{item.promoteTips}}</div>
      </SourcePanel>
    </div>
  </div>
</template>

<script>
  import path from 'path'
  import find from 'lodash/find'

  import Nav from './Nav'
  import Tips from './Tips'
  import SourcePanel from './SourcePanel'

  const SCROLL_SYNC = {
    generated: 'sourceMap',
    sourceMap: 'generated',
  }

  const SHAREABLE_PREFIX = `${location.protocol}//${location.host}/#/json/`

  export default {

    components: { Nav, Tips, SourcePanel },

    data() {
      return {

        orientation: 'landscape',
        // viewport orientation

        hovering: null,
        // panel currently hovering on

        highlighted: null,
        // id to be highlighted

        enabledPanels: { generated: true, sourceMap: true, original: true },
        // enabled panels
      }
    },

    computed: {

      /**
       * Computed document.title according to uploaded file name
       */
      title() {
        const { resource } = this.$ctrl
        const files = [
          resource.generatedFileName || resource.expectedGeneratedFileName,
          resource.sourceMapFileName || resource.expectedSourceMapFileName,
        ].filter(v => v)
        if (!files.length) {
          return 'SourceMapViewer'
        }
        return `${files.join(' / ')} - SMV`
      },

      /**
       * Data of panels
       */
      panels() {
        const { resource } = this.$ctrl
        return [
          {
            displayName: 'Original',
            name: 'original',
            hidden: resource.selectedFileName == null,
            content: resource.selectedView,
            lineNumber: true,
            promoteText: `Drop ${path.basename(resource.selectedFileName || '')} here`,
            promoteTips: resource.selectedFileName || '',
          },
          {
            displayName: 'Generated',
            name: 'generated',
            lineNumber: true,
            content: resource.generatedView,
            promoteText: `Drop ${resource.expectedGeneratedFileName || 'generated file'} here`,
          },
          {
            displayName: 'SourceMap',
            name: 'sourceMap',
            lineNumber: !this.enabledPanels.generated || this.orientation === 'portrait',
            content: resource.mappingsView,
            promoteText: `Drop ${resource.expectedSourceMapFileName || 'sourcemap file'} here`,
          },
        ]
      },
    },

    watch: {

      title() {
        document.title = this.title
      },
    },

    created() {
      this.onCopy = this.onCopy.bind(this)
      this.onPaste = this.onPaste.bind(this)
    },

    mounted() {
      this.match = window.matchMedia('screen and (orientation: portrait)')

      this.match.onchange = this.onOrientationChange.bind(this)
      this.onOrientationChange(this.match)

      window.addEventListener('copy', this.onCopy)
      window.addEventListener('paste', this.onPaste)

      if (location.hash) {
        this.restoreFromHash()
      }
    },

    beforeDestroy() {
      if (this.match) {
        this.match.onchange = null
      }
      window.removeEventListener('copy', this.onCopy)
      window.removeEventListener('paste', this.onPaste)
    },

    methods: {

      onUpload(files, type) {
        this.displayFileList = false
        this.$ctrl.resource.handleFiles(files, type)
      },

      onHoverNode(id) {
        this.highlighted = id
      },

      onSelectNode(mapping, type) {
        if (type === 'original') {
          this.scrollToLine(mapping.generatedLine, 'generated')
          return this.scrollToLine(mapping.generatedLine, 'sourceMap')
        }
        this.$ctrl.resource.selectedIndex = mapping.source
        this.$nextTick(() => {
          this.scrollToLine(mapping.originalLine, 'original')
        })
      },

      onMouseOver(event, type) {
        this.hovering = type
      },

      onPanelScroll(scrollTop, type) {
        for (const panel of this.$refs[SCROLL_SYNC[type]] || []) {
          panel.scrollTo(scrollTop)
        }
      },

      onOrientationChange(event) {
        if (event.matches) {
          this.orientation = 'portrait'
        } else {
          this.orientation = 'landscape'
        }
      },

      onGoto(target) {
        const { groups } = target.match(/:(?<line>\d+)(:(?<column>\d+))?/)
        const { mapping, id } = this.$ctrl.resource.findOriginalMapping({
          line: Number(groups.line) || 1,
          column: Number(groups.column) || 0,
        })
        this.highlighted = id
        this.$ctrl.resource.selectedIndex = mapping.source
        this.$nextTick(() => {
          this.scrollToLine(mapping.originalLine, 'original')
        })
      },

      onTogglePanel(type) {
        this.enabledPanels[type] = !this.enabledPanels[type]
      },

      onCopy(event) {
        const sel = document.getSelection()
        if (sel.anchorNode !== sel.focusNode || sel.anchorOffset !== sel.focusOffset) {
          return
        }
        const data = this.serialize()
        const encodedData = encodeURIComponent(data)
        if (encodedData.length > 40000) {
          event.clipboardData.setData('text/plain', data)
          this.$ctrl.tips.suc('Case data copied to clipboard')
        } else {
          event.clipboardData.setData('text/plain', `${SHAREABLE_PREFIX}${encodeURIComponent(data)}`)
          this.$ctrl.tips.suc('Shareable link copied to clipboard')
        }
        event.preventDefault()
      },

      onPaste(event) {
        const textDataItem = find(event.clipboardData.items, { type: 'text/plain' })
        if (!textDataItem) {
          return
        }
        textDataItem.getAsString(str => {
          if (str.startsWith(SHAREABLE_PREFIX)) {
            return this.restore(str.slice(SHAREABLE_PREFIX.length))
          }
          let isSMVData = false
          try {
            isSMVData = JSON.parse(str).isSMVData
          } catch (error) {
            // noop
          }
          if (isSMVData) {
            return this.restore(str)
          }
          if (!this.hovering) {
            return
          }
          this.$ctrl.resource.handleText(str, this.hovering)
        })
      },

      scrollToLine(line, target) {
        for (const panel of this.$refs[target] || []) {
          panel.scrollToLine(line)
        }
      },

      serialize() {
        return JSON.stringify({
          isSMVData: true,
          resource: this.$ctrl.resource.serialize(),
          highlighted: this.highlighted,
          enabledPanels: this.enabledPanels,
          offset: {
            generated: this.$refs.generated[0].getOffset() || this.$refs.sourceMap[0].getOffset(),
            original: this.$refs.original[0].getOffset(),
          },
        })
      },

      restore(data) {
        data = JSON.parse(data)

        this.$ctrl.resource.restore(data.resource)

        this.highlighted = data.highlighted
        this.enabledPanels = data.enabledPanels

        this.$nextTick(() => {
          this.$refs.generated[0].scrollTo(data.offset.generated || 0)
          this.$refs.sourceMap[0].scrollTo(data.offset.generated || 0)
          this.$refs.original[0].scrollTo(data.offset.original || 0)
        })
      },

      async restoreFromHash() {
        try {
          let caseData = null

          if (location.hash.startsWith('#/url/')) {
            const { files } = await fetch(decodeURIComponent(location.hash.slice(6))).then(res => res.json())
            caseData = await fetch(Object.values(files)[0].raw_url).then(res => res.text())
          } else if (location.hash.startsWith('#/raw/')) {
            caseData = await fetch(decodeURIComponent(location.hash.slice(6))).then(res => res.text())
          } else if (location.hash.startsWith('#/json/')) {
            caseData = decodeURIComponent(location.hash.slice(7))
          }

          this.restore(caseData)
        } catch (error) {
          this.$ctrl.tips.err('Failed to restore data from url')
          console.error(error.stack) // eslint-disable-line no-console
        }
      },
    },
  }
</script>

<style>
  html,
  body {
    height: 100%;
    margin: 0;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  *::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  *::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #bbb;
  }
  *::-webkit-scrollbar-track {
    background: #eee;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>

<style module="$">
  .app {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
  .container {
    display: flex;
    flex: 1;
    width: 100%;
    height: 1px;
  }
  .panel {
    position: relative;
    flex: 1 auto;
    width: 1px;
    height: 100%;
  }
  .promoteText {
    display: inline-block;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.5em;
    color: #aaa;
  }
  .promoteTips {
    white-space: nowrap;
    font-size: .9em;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #999;
  }

  @media screen and (orientation: portrait) {

    .container {
      flex-direction: column;
      height: 100%;
    }

    .panel {
      height: 1px;
      width: 100%;
    }
  }
</style>
