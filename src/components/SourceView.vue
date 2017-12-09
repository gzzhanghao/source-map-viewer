<template>
  <div
    :class="[$.container, { [$.dragging]: dragging }]"
    @scroll="onViewportUpdate"
    @mousedown="onDragStart"
  >
    <div :style="{ height: `${this.content.length * LINE_HEIGHT + 2}px`, minWidth: `${maxLineWidth}px` }">
      <table :style="{ transform: `translateY(${translateY}px)` }">
        <tbody>
          <tr :class="$.line" v-for="(line, lineNumber) in displayLines" :key="displayRange[0] + lineNumber">
            <template v-if="showLineNumber">
              <td :class="$.lineNumber" :data-line-number="displayRange[0] + lineNumber + 1"></td>
            </template>
            <td :class="$.lineContent">
              <span
                v-for="chunk in line"
                :class="[$.chunk, { [$.empty]: !chunk.content }]"
                :title="chunk.names.filter(v => v).join(',')"
                :data-origin-source="chunk.source"
                :data-origin-line="chunk.line"
                :data-origin-column="chunk.column"
                @click="onSelectChunk(chunk)"
              >
                <template>{{chunk.content}}</template>
              </span><br/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <iframe ref="resizeDetector" :class="$.resizeDetector" />
  </div>
</template>

<script>
  import debounce from 'lodash/debounce'
  import SourceMapConsumer from 'source-map'

  export default {

    props: {
      content: { type: Array, required: true },
      showLineNumber: { type: Boolean, default: false },
    },

    data() {
      return {
        DRAGGING_FACTOR: 2,
        LINE_HEIGHT: 18,

        maxLineWidth: 0,
        viewport: [0, 0],
        dragging: undefined,
      }
    },

    mounted() {
      this.onMouseMove = debounce(this.onMouseMove).bind(this)
      this.onDragEnd = debounce(this.onDragEnd).bind(this)
      this.onDragMove = debounce(this.onDragMove).bind(this)
      this.onViewportUpdate = this.onViewportUpdate.bind(this)

      this.onViewportUpdate()

      window.addEventListener('mouseover', this.onMouseMove)
      window.addEventListener('mousemove', this.onDragMove)
      window.addEventListener('mouseup', this.onDragEnd)
      this.$refs.resizeDetector.contentWindow.addEventListener('resize', this.onViewportUpdate)
    },

    updated() {
      this.maxLineWidth = Math.max(this.maxLineWidth, this.$el.scrollWidth)
    },

    beforeDestroy() {
      window.removeEventListener('mouseover', this.onMouseMove)
      window.removeEventListener('mousemove', this.onDragMove)
      window.removeEventListener('mouseup', this.onDragEnd)

      if (this.$refs.resizeDetector.contentWindow) {
        this.$refs.resizeDetector.contentWindow.removeEventListener('resize', this.onViewportUpdate)
      }
    },

    methods: {

      scrollToLine(line) {
        this.$el.scrollTop = line * this.LINE_HEIGHT - this.LINE_HEIGHT / 2 + 2 - this.$el.offsetHeight / 2
      },

      onViewportUpdate() {
        this.viewport = [this.$el.scrollTop, this.$el.offsetHeight]
      },

      onMouseMove(event) {
        const source = event.target.getAttribute('data-origin-source')
        const line = event.target.getAttribute('data-origin-line')
        const column = event.target.getAttribute('data-origin-column')

        if (line && column) {
          this.$emit('hover', { source, line: parseInt(line), column: parseInt(column) })
        }
      },

      onSelectChunk(chunk) {
        if (chunk.source != null) {
          this.$emit('select', chunk)
        }
      },

      onDragStart(event) {
        if (event.ctrlKey || event.button) {
          return
        }
        event.preventDefault()
        this.dragging = {
          x: this.$el.scrollLeft + this.DRAGGING_FACTOR * event.clientX,
          y: this.$el.scrollTop + this.DRAGGING_FACTOR * event.clientY,
        }
      },

      onDragMove(event) {
        if (!this.dragging) {
          return
        }
        this.$el.scrollLeft = this.dragging.x - this.DRAGGING_FACTOR * event.clientX
        this.$el.scrollTop = this.dragging.y - this.DRAGGING_FACTOR * event.clientY
      },

      onDragEnd(event) {
        this.dragging = undefined
      },
    },

    computed: {

      displayRange() {
        return [
          Math.max(0, Math.floor((this.viewport[0] - 2) / this.LINE_HEIGHT)),
          Math.floor(this.viewport[1] / this.LINE_HEIGHT),
        ]
      },

      displayLines() {
        return this.content.slice(this.displayRange[0], this.displayRange[0] + this.displayRange[1] + 2)
      },

      translateY() {
        return this.displayRange[0] * this.LINE_HEIGHT
      },
    },

    watch: {

      content() {
        this.maxLineWidth = 0
      },
    },
  }
</script>

<style module="$">
  .container {
    position: relative;
    overflow: scroll;
    cursor: -webkit-grab;
  }
  .container.dragging {
    cursor: -webkit-grabbing;
  }
  .container::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  .container::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #bbb;
  }
  .container::-webkit-scrollbar-track {
    background: #eee;
  }
  .line {
    font-size: 12px;
    white-space: pre;
    font-family: monospace;
    color: #222;
  }
  .lineNumber {
    padding: 0 10px;
    min-width: 30px;
    text-align: right;
    vertical-align: top;
    color: #999;
  }
  .lineNumber:before {
    content: attr(data-line-number);
  }
  .chunk[data-origin-source] {
    border-left: 2px solid lightgray;
    border-radius: 2px;
    cursor: pointer;
  }
  .resizeDetector {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    pointer-events: none;
  }
</style>
