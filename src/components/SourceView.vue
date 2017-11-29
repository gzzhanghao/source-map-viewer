<template>
  <div class="container">
    <table>
      <tbody>
        <tr class="line" v-for="(line, lineNumber) in lines">
          <td class="lineNumber" :data-line-number="lineNumber + 1"></td>
          <td class="lineContent">
            <span class="column" v-for="column in line">
              <template>{{column.content}}</template>
            </span>
            <br/>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import SourceMapConsumer from 'source-map'

  export default {

    props: {
      code: { type: String, required: true },
      mappings: { type: Array, required: true },
    },

    computed: {

      lines() {
        const lines = this.code.split(/\r?\n/g).map(content => [{ content }])

        return lines
      },
    },
  }
</script>

<style scoped>
  .container {
    overflow: auto;
  }
  .line {
    font-size: 12px;
    line-height: 20px;
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
</style>
