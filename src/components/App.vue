<template>
  <DropZone class="app" @drop="this.onDrop">
    <template v-if="generatedContent">
      <div class="sourceView">
        <SourceView showLineNumber :content="generatedView" @hover="onHover" />
      </div>
    </template>
    <template v-if="selectedSource">
      <div class="sourceView">
        <template v-if="selectedView">
          <SourceView :content="selectedView" @hover="onHover" />
        </template>
        <template v-else>
          Source empty
        </template>
      </div>
    </template>
    <template v-if="generatedContent">
      <div class="sourceView">
        <SourceView :content="mappingsView" @hover="onHover" />
      </div>
    </template>
  </DropZone>
</template>

<script>
  import { get, isEqual, sortedIndexBy } from 'lodash'

  import DropZone from './DropZone'
  import SourceView from './SourceView'
  import cssAttrSelector from '../utils/cssAttrSelector'
  import extractSourceMap from '../utils/extractSourceMap'

  import example from 'raw-loader!./example'

  export default {

    components: { DropZone, SourceView },

    data() {
      return {

        generatedContent: undefined,
        missingSourceMap: undefined,

        originalMappings: undefined,
        generatedMappings: undefined,

        sourceList: undefined,
        sourceContents: undefined,

        highlightSource: undefined,
        selectedSource: undefined,
      }
    },

    mounted() {
      this.highlightStyleTag = document.createElement('style')
      document.head.appendChild(this.highlightStyleTag)
      this.loadSuccess(null, example)
    },

    beforeDestroy() {
      document.head.removeChild(this.highlightStyleTag)
    },

    methods: {

      onDrop(event) {
        this.draggingOver = false
        for (const file of event.dataTransfer.files) {
          const reader = new FileReader
          reader.onerror = event => this.loadError(file, event)
          reader.onload = event => this.loadSuccess(file, event.target.result)
          reader.readAsText(file)
        }
      },

      onHover(generatedPosition) {
        if (!isEqual(this.highlightSource, generatedPosition)) {
          this.highlightSource = Object.freeze(generatedPosition)
        }
      },

      loadError(file, event) {
        console.log('loadError', file, event)
      },

      loadSuccess(file, content) {
        const sourceMap = extractSourceMap(content)

        this.missingSourceMap = sourceMap.sourceMapFile

        this.generatedContent = content
        this.sourceContents = sourceMap.sourceContents

        this.sourceList = Object.freeze(Object.keys(sourceMap.sourceContents))

        this.originalMappings = Object.freeze(sourceMap.originalMappings)
        this.generatedMappings = Object.freeze(sourceMap.generatedMappings)

        this.selectedSource = this.sourceList[0]

        if (sourceMap.sourceContents["webpack:///src/App.vue"]) {
          this.selectedSource = "webpack:///src/App.vue"
        }
      },
    },

    computed: {

      generatedView() {
        const rawLines = this.generatedContent.split(/\r?\n/g)
        const lines = rawLines.map(() => [])

        for (let i = this.generatedMappings.length - 1; i >= 0; i--) {
          const mapping = this.generatedMappings[i]
          const lineNumber = mapping.generatedLine - 1

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
        const lines = this.generatedContent.split(/\r?\n/g).map(() => [])

        for (let i = this.generatedMappings.length - 1; i >= 0; i--) {
          const mapping = this.generatedMappings[i]
          const lineNumber = mapping.generatedLine - 1

          lines[lineNumber].unshift({ names: [], content: ' ' })

          lines[lineNumber].unshift({
            names: [mapping.name],
            source: mapping.source,
            line: mapping.originalLine,
            column: mapping.originalColumn,
            content: `${mapping.generatedColumn} => ${mapping.originalLine}:${mapping.originalColumn}`,
          })
        }

        return lines
      },

      selectedView() {
        const content = this.sourceContents[this.selectedSource]

        if (!content) {
          return
        }

        const rawLines = content.split(/\r?\n/g)
        const lines = rawLines.map(() => [])

        const beginIndex = sortedIndexBy(this.originalMappings, this.selectedSource, 'source')

        for (let i = beginIndex - 1; i >= 0; i--) {
          const mapping = this.originalMappings[i]

          if (mapping.source !== this.selectedSource) {
            break
          }

          const lineNumber = mapping.originalLine - 1

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

      'highlightSource'(newSource) {
        const columnSelector = cssAttrSelector({
          'data-origin-source': newSource.source,
          'data-origin-line': newSource.line,
          'data-origin-column': newSource.column,
        })
        this.highlightStyleTag.innerHTML = `
          ${columnSelector} {
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
  body,
  .app {
    height: 100%;
    margin: 0;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
</style>

<style scoped>
  .app {
    display: flex;
  }

  .sourceView {
    overflow: auto;
    height: 100%;
    flex: 1;
  }
</style>
