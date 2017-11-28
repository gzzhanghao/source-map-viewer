<template>
  <div
    class="app"
    @dragover.prevent
    @dragenter="draggingOver = true"
    @dragleave="draggingOver = false"
    @drop.prevent="onDrop"
  >
    <div class="dropZone" v-show="draggingOver" />
  </div>
</template>

<script>
  import { SourceMapConsumer } from 'source-map'
  import { fromSource, mapFileCommentRegex } from 'convert-source-map'

  export default {

    data() {
      return {
        draggingOver: false,
      }
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
        const consumer = new SourceMapConsumer(fromSource(content).sourcemap)

        const mappings = []
        const sources = {}

        consumer.eachMapping(map => {
          mappings.push(map)
          sources[map.source] = true
        })

        for (const src of Object.keys(sources)) {
          sources[src] = consumer.sourceContentFor(src, true)
        }

        console.log(sources)
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
  .dropZone {
    height: 100%;
    padding: 5px;
    pointer-events: none;
  }
  .dropZone:after {
    content: '';
    display: block;
    height: 100%;
    border: 2px dashed gray;
    box-sizing: border-box;
  }
</style>
