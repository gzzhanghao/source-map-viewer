<template>
  <table>
    <tbody>
      <tr class="line" v-for="(line, lineNumber) in content">
        <template v-if="showLineNumber">
          <td class="lineNumber" :data-line-number="lineNumber + 1"></td>
        </template>
        <td class="lineContent">
          <span
            class="column"
            v-for="chunk in line"
            :class="{ empty: !chunk.content }"
            :title="chunk.names.filter(v => v).join(',')"
            :data-origin-source="chunk.source"
            :data-origin-line="chunk.line"
            :data-origin-column="chunk.column"
          >
            <template>{{chunk.content}}</template>
          </span>
          <br/>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import SourceMapConsumer from 'source-map'

  export default {

    props: {
      content: { type: Array, required: true },
      showLineNumber: { type: Boolean, default: false },
    },

    mounted() {
      this.onMouseMove = this.onMouseMove.bind(this)
      window.addEventListener('mouseover', this.onMouseMove)
    },

    beforeDestroy() {
      window.removeEventListener('mouseover', this.onMouseMove)
    },

    methods: {

      onMouseMove(event) {
        const source = event.target.getAttribute('data-origin-source')
        const line = event.target.getAttribute('data-origin-line')
        const column = event.target.getAttribute('data-origin-column')

        if (line && column) {
          this.$emit('hover', { source, line: parseInt(line), column: parseInt(column) })
        }
      },
    },
  }
</script>

<style scoped>
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
  .column[data-origin-source] {
    border-left: 2px solid lightgray;
  }
</style>
