<template>
  <div :class="$.app">
    <MenuView />
    <div :class="$.container">
      <div
        ref="generatedView"
        :class="$.frame"
        @dragover.prevent
        @drop.prevent="onDrop($event, readGenerated)"
        @scroll="onScrollSync($event, 'mappingsView')"
      >
        <SourceView
          v-if="generatedView"
          showLineNumber
          :content="generatedView"
          @hover="onHover"
          @select="onSelectGenerated"
        />
      </div>
      <div
        ref="mappingsView"
        :class="$.frame"
        @dragover.prevent
        @drop.prevent="onDrop($event, readSourceMap)"
        @scroll="onScrollSync($event, 'generatedView')"
      >
        <SourceView
          v-if="mappingsView"
          :content="mappingsView"
          @hover="onHover"
          @select="onSelectGenerated"
        />
      </div>
      <div
        ref="selectedView"
        :class="$.frame"
        @dragover.prevent
        @drop.prevent="onDrop($event, readOriginal)"
      >
        <SourceView
          v-if="selectedView"
          showLineNumber
          :content="selectedView"
          @hover="onHover"
          @select="onSelectSource"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import get from 'lodash/get'
  import map from 'lodash/map'
  import find from 'lodash/find'
  import uniq from 'lodash/uniq'
  import filter from 'lodash/filter'
  import isEqual from 'lodash/isEqual'
  import sortedIndexBy from 'lodash/sortedIndexBy'

  import MenuView from './MenuView'
  import SourceView from './SourceView'

  import readAsText from '../utils/readAsText'
  import cssAttrSelector from '../utils/cssAttrSelector'
  import extractMappings from '../utils/extractMappings'
  import extractSourceMap from '../utils/extractSourceMap'

  import example from 'raw-loader!../example'

  export default {

    components: { SourceView, MenuView },

    data() {
      return {

        generatedContent: undefined,
        missingSourceMap: undefined,

        originalMappings: undefined,
        generatedMappings: undefined,

        sources: undefined,

        highlightSource: undefined,
        selectedSource: undefined,
      }
    },

    mounted() {
      this.highlightStyleTag = document.createElement('style')
      document.head.appendChild(this.highlightStyleTag)

      this.generatedContent = example
      const sourceMap = extractSourceMap(this.generatedContent)
      if (this.generatedMappings && sourceMap.sourceMapFile) {
        return
      }
      this.setSourceMap(sourceMap)
      this.selectedSource = 0
    },

    beforeDestroy() {
      document.head.removeChild(this.highlightStyleTag)
    },

    methods: {

      onDrop(event, defaultHandler) {
        const { files } = event.dataTransfer
        if (!files.length) {
          return
        }
        if (files.length === 1) {
          defaultHandler.call(this, files[0])
          return
        }
        console.log(files)
        // @todo handle multiple files
      },

      async readGenerated(file) {
        this.generatedContent = await readAsText(file)
        const sourceMap = extractSourceMap(this.generatedContent)
        if (this.generatedMappings && sourceMap.sourceMapFile) {
          return
        }
        this.setSourceMap(sourceMap)
        this.selectedSource = 0
      },

      async readSourceMap(file) {
        this.setSourceMap(extractMappings(JSON.parse(await readAsText(file))))
        this.selectedSource = Math.min(this.sources.length - 1, this.selectedSource || 0)
      },

      async readOriginal(file) {
        if (this.selectedSource != null) {
          this.sources[this.selectedSource].content = await readAsText(file)
        }
      },

      setSourceMap(sourceMap) {
        this.missingSourceMap = sourceMap.sourceMapFile

        this.sources = sourceMap.sources

        this.originalMappings = Object.freeze(sourceMap.originalMappings)
        this.generatedMappings = Object.freeze(sourceMap.generatedMappings)
      },

      onHover(generatedPosition) {
        if (!isEqual(this.highlightSource, generatedPosition)) {
          this.highlightSource = Object.freeze(generatedPosition)
        }
      },

      onSelectGenerated(chunk) {
        this.selectedSource = chunk.source
        this.$nextTick(() => {
          this.scrollToLine('selectedView', chunk.line)
        })
      },

      onSelectSource(chunk) {
        const targetMappings = filter(this.generatedMappings, {
          source: chunk.source,
          originalLine: chunk.line,
          originalColumn: chunk.column,
        })
        this.scrollToLine('mappingsView', uniq(map(targetMappings, 'generatedLine'))[0])
      },

      scrollToLine(target, line) {
        const view = this.$refs[target]
        if (!view) {
          return
        }
        const lineElement = view.querySelector(`[data-line="${line}"]`)
        if (lineElement) {
          lineElement.scrollIntoView({ behavior: 'instant' })
        }
      },

      onScrollSync(event, target) {
        if (!this.$refs[target]) {
          return
        }
        const el = this.$refs[target]
        if (!el || event.target.scrollTop === this.lastScrollTopSync) {
          return
        }
        el.scrollTop = event.target.scrollTop
        this.lastScrollTopSync = el.scrollTop
      },
    },

    computed: {

      generatedView() {

        if (!this.generatedContent) {
          return
        }

        const rawLines = this.generatedContent.split(/\r?\n/g)
        const lines = rawLines.map(() => [])

        const generatedMappings = this.generatedMappings || []

        for (let i = generatedMappings.length - 1; i >= 0; i--) {
          const mapping = generatedMappings[i]
          const lineNumber = mapping.generatedLine - 1

          if (!lines[lineNumber]) {
            continue
          }

          lines[lineNumber].unshift({
            names: [mapping.name],
            source: mapping.source,
            line: mapping.originalLine,
            column: mapping.originalColumn,
            content: rawLines[lineNumber].slice(mapping.generatedColumn),
          })

          rawLines[lineNumber] = rawLines[lineNumber].slice(0, mapping.generatedColumn)
        }

        for (let i = 0, ii = rawLines.length; i < ii; i++) {
          if (rawLines[i]) {
            lines[i].unshift({ names: [], content: rawLines[i] })
          }
        }

        return lines
      },

      mappingsView() {

        if (!this.generatedMappings) {
          return
        }

        const lines = []

        if (this.generatedContent) {
          lines.length = this.generatedContent.split(/\r?\n/g).length
        }

        for (const mapping of this.generatedMappings) {
          const lineNumber = mapping.generatedLine - 1

          if (!lines[lineNumber]) {
            lines[lineNumber] = []
          }

          let source = this.sources[mapping.source]

          if (source) {
            source = source.path
          }

          lines[lineNumber].push({
            names: [source, mapping.name],
            source: mapping.source,
            line: mapping.originalLine,
            column: mapping.originalColumn,
            content: `${mapping.generatedColumn} => ${mapping.originalLine}:${mapping.originalColumn}`,
          })

          lines[lineNumber].push({ names: [], content: ' ' })
        }

        return lines
      },

      selectedView() {

        if (!this.sources) {
          return
        }

        const source = this.sources[this.selectedSource]

        if (!source.content) {
          return
        }

        const rawLines = source.content.split(/\r?\n/g)
        const lines = rawLines.map(() => [])

        const beginIndex = sortedIndexBy(this.originalMappings || [], this.selectedSource, 'source')

        for (let i = beginIndex - 1; i >= 0; i--) {
          const mapping = this.originalMappings[i]

          if (mapping.source !== this.selectedSource) {
            continue
          }

          const lineNumber = mapping.originalLine - 1

          if (!lines[lineNumber]) {
            continue
          }

          if (get(lines[lineNumber][0], 'column') === mapping.originalColumn) {
            lines[lineNumber][0].names.push(mapping.name)
            continue
          }

          lines[lineNumber].unshift({
            names: [mapping.name],
            source: mapping.source,
            line: mapping.originalLine,
            column: mapping.originalColumn,
            content: rawLines[lineNumber].slice(mapping.originalColumn),
          })

          rawLines[lineNumber] = rawLines[lineNumber].slice(0, mapping.originalColumn)
        }

        for (let i = 0, ii = rawLines.length; i < ii; i++) {
          if (rawLines[i]) {
            lines[i].unshift({ names: [], content: rawLines[i] })
          }
        }

        return lines
      },
    },

    watch: {

      highlightSource(newSource) {
        const chunkSelector = cssAttrSelector({
          'data-origin-source': newSource.source,
          'data-origin-line': newSource.line,
          'data-origin-column': newSource.column,
        })
        this.highlightStyleTag.innerHTML = `
          ${chunkSelector} {
            color: white;
            background: black;
            border-left-color: black !important;
          }
        `
      },
    },
  }
</script>

<style>
  html,
  body {
    height: 100%;
    margin: 0;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
</style>

<style module="$">
  .app {
    height: 100%;
    position: relative;
    width: 100%;
  }
  .container {
    display: flex;
    width: 100%;
    height: 100%;
  }
  .container > * {
    flex: 1 auto;
    width: 1px;
  }
  .frame {
    height: 100%;
    overflow: auto;
  }
  .frame::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  .frame::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: #bbb;
  }
  .frame::-webkit-scrollbar-track {
    background: #eee;
  }
</style>
