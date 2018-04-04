<template>
  <div :class="$.app">
    <Tips />
    <div :class="$.nav">
      <Menu v-if="$ctrl.resource.sources.length" :class="$.navMenu" @click.native="onToggleFileList" />
      <ul v-if="displayFileList" :class="$.fileList" @mousedown.stop>
        <li
          v-for="(src, index) in $ctrl.resource.sources"
          :key="index"
          :class="[$.fileListItem, {
            [$.active]: $ctrl.resource.selectedIndex === index,
            [$.missingContent]: !$ctrl.resource.sourceContents[index] && !$ctrl.resource.overrides[index],
          }]"
          :title="src"
          @click="onSelectOriginal(index)"
        >
          {{src}}
        </li>
      </ul>
      <span :class="$.navTitle" :title="$ctrl.resource.selectedFileName">
        {{$ctrl.resource.selectedFileName}}
      </span>
      <span :class="$.panelButtonGroup">
        <a
          v-for="item in panels"
          v-show="!item.hidden"
          :key="item.name"
          :class="[$.panelButton, { [$.active]: !item.hidden && enabledPanels[item.name] }]"
          href="javascript:"
          @click="togglePanel(item.name)"
        >
          {{item.displayName}}
        </a>
      </span>
    </div>

    <div :class="$.container">
      <SourcePanel
        v-for="item in panels"
        v-show="!item.hidden && enabledPanels[item.name]"
        :class="$.panel"
        :key="item.name"
        :ref="item.name"
        :content="item.content"
        :hovering="hovering"
        :line-number="item.lineNumber"
        @hover="onHover"
        @select="onSelect($event, item.name)"
        @scroll="onScroll($event, item.name)"
        @upload="onUpload($event, item.name)"
      >
        <div :class="$.promoteText">{{item.promoteText}}</div>
        <div v-if="item.promoteTips" :class="$.promoteTips">{{item.promoteTips}}</div>
      </SourcePanel>
    </div>
  </div>
</template>

<script>
  import path from 'path'

  import Tips from './Tips'
  import Menu from './icons/Menu'
  import SourcePanel from './SourcePanel'

  const SCROLL_SYNC = {
    generated: 'sourceMap',
    sourceMap: 'generated',
  }

  export default {

    components: { Tips, Menu, SourcePanel },

    data() {
      return {

        hovering: null,

        displayFileList: false,

        enabledPanels: { generated: true, sourceMap: true, original: true },
      }
    },

    computed: {

      panels() {
        const { resource } = this.$ctrl

        const panels = [
          {
            displayName: 'Generated',
            name: 'generated',
            content: resource.generatedView,
            lineNumber: true,
            promoteText: `Drop ${resource.generatedFileName || 'generated file'} here`,
          },
          {
            displayName: 'SourceMap',
            name: 'sourceMap',
            content: resource.mappingsView,
            promoteText: `Drop ${resource.sourceMapFileName || 'sourcemap file'} here`,
          },
          {
            displayName: 'Original',
            name: 'original',
            hidden: resource.selectedFileName == null,
            content: resource.selectedView,
            lineNumber: true,
            promoteText: `Drop ${path.basename(resource.selectedFileName || '')} here`,
            promoteTips: resource.selectedFileName || '',
          },
        ]

        return panels
      },
    },

    created() {
      this.onHideFileList = this.onHideFileList.bind(this)
    },

    async mounted() {
      window.addEventListener('mousedown', this.onHideFileList)

      if (!location.hash) {
        return
      }

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

    beforeDestroy() {
      window.removeEventListener('mousedow', this.onHideFileList)
    },

    methods: {

      onUpload(files, type) {
        this.displayFileList = false
        this.$ctrl.resource.handleFiles(files, type)
      },

      onHover(id) {
        this.hovering = id
      },

      onSelect(mapping, type) {
        if (type === 'original') {
          this.scrollToLine(mapping.generatedLine, 'generated')
          return this.scrollToLine(mapping.generatedLine, 'sourceMap')
        }
        this.$ctrl.resource.selectedIndex = mapping.source
        this.$nextTick(() => {
          this.scrollToLine(mapping.originalLine, 'original')
        })
      },

      onScroll(scrollTop, type) {
        for (const panel of this.$refs[SCROLL_SYNC[type]] || []) {
          panel.scrollTo(scrollTop)
        }
      },

      onToggleFileList() {
        this.displayFileList = !this.displayFileList
      },

      onHideFileList() {
        this.displayFileList = false
      },

      onSelectOriginal(index) {
        this.displayFileList = false
        this.$ctrl.resource.selectedIndex = index
      },

      scrollToLine(line, target) {
        for (const panel of this.$refs[target] || []) {
          panel.scrollToLine(line)
        }
      },

      togglePanel(type) {
        this.enabledPanels[type] = !this.enabledPanels[type]
      },

      serialize() {
        const data = {
          generatedContent: this.$ctrl.resource.generatedContent,
          overrides: this.$ctrl.resource.overrides,
          selectedIndex: this.$ctrl.resource.selectedIndex,
          hovering: this.hovering,
          enabledPanels: this.enabledPanels,
          offset: {
            generated: this.$refs.generated[0].getOffset() || this.$refs.sourceMap[0].getOffset(),
            original: this.$refs.original[0].getOffset(),
          },
        }

        if (this.$ctrl.resource.generatedInfo.inlineSourceMap !== this.$ctrl.resource.sourceMapData) {
          data.sourceMapData = this.$ctrl.resource.sourceMapData
        }

        return JSON.stringify(data)
      },

      restore(data) {
        data = JSON.parse(data)

        this.$ctrl.resource.setGeneratedContent(data.generatedContent)
        this.$ctrl.resource.overrides = data.overrides
        this.$ctrl.resource.selectedIndex = data.selectedIndex
        this.hovering = data.hovering
        this.enabledPanels = data.enabledPanels

        if (data.sourceMapData) {
          this.$ctrl.resource.sourceMapData = data.sourceMapData
        }

        this.$nextTick(() => {
          this.$refs.generated[0].scrollTo(data.offset.generated || 0)
          this.$refs.sourceMap[0].scrollTo(data.offset.generated || 0)
          this.$refs.original[0].scrollTo(data.offset.original || 0)
        })
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
  .nav {
    position: relative;
    display: flex;
    flex: 0 0 auto;
    line-height: 24px;
    padding: 8px;
    color: #bbb;
    background: #444;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
  }
  .navMenu {
    flex: 0 0 auto;
    cursor: pointer;
    fill: #bbb;
  }
  .fileList {
    position: fixed;
    top: 6px;
    left: 6px;
    max-width: 90%;
    max-width: calc(100% - 12px);
    max-height: 90%;
    max-height: calc(100% - 12px);
    overflow: auto;
    list-style: none;
    margin: 0;
    padding: 4px 0;
    border-radius: 2px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
    color: #888;
    background: #fff;
    z-index: 100;
    user-select: none;
  }
  .fileListItem {
    padding: 5px 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
  }
  .fileListItem:hover {
    background: #f6f6f6;
  }
  .fileListItem.active {
    background: #eaeaea;
    color: #333;
  }
  .fileListItem.missingContent {
    color: #CD5C5C;
  }
  .navTitle {
    margin-left: 8px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .navTitle::selection {
    background: #777;
  }
  .panelButtonGroup {
    flex: 0 0 auto;
    margin-left: auto;
    user-select: none;
  }
  .panelButton {
    display: inline-block;
    margin-left: 8px;
    color: #bbb;
    text-decoration: none;
  }
  .panelButton.active {
    color: white;
  }
  .container {
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
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
    }

    .panel {
      height: 1px;
      width: 100%;
    }
  }
</style>
