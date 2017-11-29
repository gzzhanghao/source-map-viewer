<template>
  <DropZone class="app" @drop="this.onDrop">
    <template v-if="generatedCode">
      <div class="sourceView">
        <SourceView :code="generatedCode" :mappings="generatedMappings" />
      </div>
    </template>
  </DropZone>
</template>

<script>
  import DropZone from './DropZone'
  import SourceView from './SourceView'
  import extractSourceMap from '../utils/extractSourceMap'

  import example from 'raw-loader!./example'

  export default {

    components: { DropZone, SourceView },

    data() {
      return {
        generatedCode: undefined,
        missingSourceMap: undefined,
        mappings: undefined,
        sourceList: undefined,
        sourceContents: undefined,
      }
    },

    mounted() {
      this.loadSuccess(null, example)
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

      loadError(file, event) {
        console.log('loadError', file, event)
      },

      loadSuccess(file, content) {
        const { mappings, sources, sourceMapFile } = extractSourceMap(content)

        this.missingSourceMap = sourceMapFile

        this.generatedCode = content
        this.mappings = Object.freeze(mappings)

        this.sourceContents = sources
        this.sourceList = Object.freeze(Object.keys(sources))
      },
    },

    computed: {

      generatedMappings() {
        console.log({
          generatedCode: this.generatedCode,
          missingSourceMap: this.missingSourceMap,
          mappings: this.mappings,
          sourceList: this.sourceList,
          sourceContents: this.sourceContents,
        })
        return []
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
  * {
    box-sizing: border-box;
  }
</style>

<style scoped>
  .app {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
  }

  .sourceView {
    width: 100%;
  }
</style>
