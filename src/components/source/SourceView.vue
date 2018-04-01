<template>
  <div
    :class="[$.container, { [$.dragging]: dragging }]"
    @scroll="onViewportUpdate"
    @mousedown="onDragStart"
  >
    <div :style="{ height: `${content.length * lineHeight + 2}px`, minWidth: `${maxWidth}px` }">
      <table :style="{ transform: `translateY(${translateY}px)` }">
        <tbody>
          <tr
            v-for="(lineData, index) in displayLines"
            :key="displayRange[0] + index"
            :class="$.line"
          >
            <td
              v-if="lineNumber"
              :class="$.lineNumber"
              :data-line="displayRange[0] + index + 1"
            />
            <td :class="$.lineContent">
              <span
                v-for="(chunk, index) in lineData"
                :key="index"
                :class="[$.chunk, { [$.mapped]: chunk.id, [$.hovering]: chunk.id === hovering }]"
                :title="chunk.names | names"
                @click="onSelect(chunk)"
                @mouseover="onHover(chunk)"
              >
                <template>{{chunk.content}}</template>
              </span><br/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <iframe ref="resizeDetector"
    :class="$.resizeDetector"
    />
  </div>
</template>

<script>
  import compact from 'lodash/compact'
  import debounce from 'lodash/debounce'

  const LINE_PADDING = 10

  const DRAGGING_FACTOR = 2

  export default {

    filters: {

      names(names) {
        return compact(names).join(',')
      },
    },

    props: {

      content: { type: Array, required: true },
      //

      hovering: { type: String },
      //

      lineNumber: { type: Boolean, default: false },
      //
    },

    data() {
      return {

        maxWidth: 0,
        //

        viewport: [0, 0],
        //

        dragging: null,
        //
      }
    },

    computed: {

      displayRange() {
        return [
          Math.max(0, Math.floor((this.viewport[0] - 2) / this.lineHeight) - LINE_PADDING),
          Math.floor(this.viewport[1] / this.lineHeight) + 2 * LINE_PADDING,
        ]
      },

      displayLines() {
        return this.content.slice(this.displayRange[0], this.displayRange[0] + this.displayRange[1] + 2)
      },

      translateY() {
        return this.displayRange[0] * this.lineHeight
      },
    },

    created() {
      this.lineHeight = 18
      this.currentScrollTop = null

      this.onHover = debounce(this.onHover).bind(this)
      this.onDragEnd = debounce(this.onDragEnd).bind(this)
      this.onDragMove = debounce(this.onDragMove).bind(this)
      this.onViewportUpdate = this.onViewportUpdate.bind(this)
    },

    mounted() {
      this.onViewportUpdate()

      window.addEventListener('mousemove', this.onDragMove)
      window.addEventListener('mouseup', this.onDragEnd)

      this.$refs.resizeDetector.contentWindow.addEventListener('resize', this.onViewportUpdate)
    },

    beforeDestroy() {
      window.removeEventListener('mousemove', this.onDragMove)
      window.removeEventListener('mouseup', this.onDragEnd)

      if (this.$refs.resizeDetector.contentWindow) {
        this.$refs.resizeDetector.contentWindow.removeEventListener('resize', this.onViewportUpdate)
      }
    },

    watch: {

      content() {
        this.$nextTick(() => {
          this.maxWidth = this.$el.scrollWidth
        })
      },
    },

    methods: {

      scrollTo(offset) {
        if (this.currentScrollTop === offset) {
          return
        }
        this.currentScrollTop = offset
        this.$el.scrollTop = offset
      },

      scrollToLine(line) {
        this.scrollTo(line * this.lineHeight - this.lineHeight / 2 + 2 - this.$el.offsetHeight / 2)
      },

      getOffset() {
        return this.currentScrollTop
      },

      onViewportUpdate() {
        const { scrollTop, offsetHeight } = this.$el

        this.viewport = [scrollTop, offsetHeight]
        this.currentScrollTop = scrollTop

        this.$emit('scroll', scrollTop)
        this.$nextTick(() => {
          this.maxWidth = Math.max(this.maxWidth, this.$el.scrollWidth)
        })
      },

      onSelect(chunk) {
        if (chunk.id) {
          this.$emit('select', chunk.mapping)
        }
      },

      onHover(chunk) {
        if (chunk.id) {
          this.$emit('hover', chunk.id)
        }
      },

      onDragStart(event) {
        if (event.ctrlKey || event.button) {
          return
        }
        event.preventDefault()
        this.dragging = {
          x: this.$el.scrollLeft + DRAGGING_FACTOR * event.clientX,
          y: this.$el.scrollTop + DRAGGING_FACTOR * event.clientY,
        }
      },

      onDragMove(event) {
        if (!this.dragging) {
          return
        }
        this.$el.scrollLeft = this.dragging.x - DRAGGING_FACTOR * event.clientX
        this.$el.scrollTop = this.dragging.y - DRAGGING_FACTOR * event.clientY
      },

      onDragEnd() {
        this.dragging = null
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
    content: attr(data-line);
  }
  .chunk.mapped {
    border-left: 2px solid lightgray;
    border-radius: 2px;
    cursor: pointer;
  }
  .chunk.hovering {
    color: white;
    background: black;
    border-left-color: black !important;
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
