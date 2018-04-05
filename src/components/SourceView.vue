<template>
  <div
    :class="$.container"
    @click="onCancelSelect"
    @scroll="onViewportUpdate"
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
                :class="[$.chunk, { [$.mapped]: chunk.id, [$.highlighted]: chunk.id === highlighted }]"
                :title="chunk.names | names"
                @click.stop="onSelect(chunk)"
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
  import debounce from 'lodash/debounce'

  const LINE_PADDING = 10

  export default {

    filters: {

      names(names) {
        return (names || []).filter(v => v).join(',')
      },
    },

    props: {

      content: { type: Array, required: true },
      //

      highlighted: { type: String },
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
      this.onViewportUpdate = this.onViewportUpdate.bind(this)
    },

    mounted() {
      this.onViewportUpdate()
      this.$refs.resizeDetector.contentWindow.addEventListener('resize', this.onViewportUpdate)
    },

    beforeDestroy() {
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

      onCancelSelect() {
        this.$emit('hover', null)
      },

      onHover(chunk) {
        if (chunk.id) {
          this.$emit('hover', chunk.id)
        }
      },
    },
  }
</script>

<style module="$">
  .container {
    position: relative;
    overflow: scroll;
  }
  .container *::selection {
    background: rgba(0, 0, 255, .2);
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
  .chunk.highlighted {
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
