<template>
  <div
    :class="$.container"
    @dragover.prevent
    @drop.prevent="onDropFiles"
  >
    <SourceView
      v-if="content"
      ref="sourceView"
      :class="$.sourceView"
      :content="content"
      :hovering="hovering"
      :line-number="lineNumber"
      @hover="onHover"
      @select="onSelect"
      @scroll="onScroll"
    />
    <div v-else :class="$.promote">
      <input
        :class="$.promoteFilePicker"
        type="file"
        multiple
        @change="onSelectFiles"
      />
      <div :class="$.promoteContent">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
  import SourceView from './SourceView'

  export default {

    components: { SourceView },

    props: {

      content: { type: Array },

      hovering: { type: String },

      lineNumber: { type: Boolean, default: false },
    },

    methods: {

      scrollTo(offset) {
        if (this.$refs.sourceView) {
          this.$refs.sourceView.scrollTo(offset)
        }
      },

      scrollToLine(line) {
        if (this.$refs.sourceView) {
          this.$refs.sourceView.scrollToLine(line)
        }
      },

      getOffset() {
        if (this.$refs.sourceView) {
          return this.$refs.sourceView.getOffset()
        }
      },

      onHover(event) {
        this.$emit('hover', event)
      },

      onSelect(event) {
        this.$emit('select', event)
      },

      onScroll(event) {
        this.$emit('scroll', event)
      },

      onSelectFiles(event) {
        this.$emit('upload', event.target.files)
      },

      onDropFiles(event) {
        this.$emit('upload', event.dataTransfer.files)
      },
    },
  }
</script>

<style module="$">
  .sourceView {
    height: 100%;
  }
  .promote {
    position: relative;
    overflow: hidden;
    height: 100%;
    padding: 5px;
  }
  .promoteFilePicker {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
  .promoteContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: 100%;
    font-family: sans-serif;
    border: 2px dashed #ccc;
  }
</style>
