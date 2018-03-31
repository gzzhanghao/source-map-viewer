import Vue from 'vue'
import sortedIndexBy from 'lodash/sortedIndexBy'
import { fromSource, mapFileCommentRegex } from 'convert-source-map'
import { BasicSourceMapConsumer } from 'source-map/lib/source-map-consumer'

import readAsText from '../utils/readAsText'

const parser = Object.create(BasicSourceMapConsumer.prototype)

export default () => new Vue({

  data() {
    return {

      generatedContent: null,
      // content of the generated file

      sourceMapData: null,
      // sourcemap data in JS Object format

      overrides: {},
      // overrides for original file content

      selectedIndex: null,
      // currently selected source index
    }
  },

  computed: {

    missingGenerated() {
      return this.generatedContent == null
    },

    generatedFileName() {
      if (this.sourceMapData) {
        return this.sourceMapData.file
      }
    },

    generatedInfo() {
      if (this.generatedContent == null) {
        return {}
      }
      const parseResult = fromSource(this.generatedContent)
      if (parseResult) {
        return { inlineSourceMap: parseResult.sourcemap }
      }
      const match = mapFileCommentRegex.exec(this.generatedContent)
      return { sourceMapFile: match && (match[1] || match[2]) }
    },

    missingSourceMap() {
      return this.sourceMapData == null
    },

    sourceMapFileName() {
      return this.generatedInfo.sourceMapFile
    },

    sources() {
      if (!this.sourceMapData) {
        return []
      }
      return this.sourceMapData.sources
    },

    sourceContents() {
      if (!this.sourceMapData) {
        return []
      }
      return this.sourceMapData.sourcesContent || []
    },

    mappings() {
      if (!this.sourceMapData) {
        return { generated: [], original: [] }
      }
      parser._parseMappings(this.sourceMapData.mappings)
      return {
        generated: parser.__generatedMappings,
        original: parser.__originalMappings,
      }
    },

    selectedFileName() {
      return this.sources[this.selectedIndex]
    },

    generatedView() {
      if (!this.generatedContent) {
        return
      }

      const rawLines = this.generatedContent.split(/\r?\n/g)
      const lineData = rawLines.map(() => [])

      const generatedMappings = this.mappings.generated

      for (let i = generatedMappings.length - 1; i >= 0; i--) {
        const mapping = generatedMappings[i]
        const lineNumber = mapping.generatedLine - 1

        if (!lineData[lineNumber]) {
          lineData[lineNumber] = []
          rawLines[lineNumber] = ''
        }

        const content = rawLines[lineNumber].slice(mapping.generatedColumn)

        lineData[lineNumber].unshift({ content, mapping, id: genId(mapping), title: mapping.name })
        rawLines[lineNumber] = rawLines[lineNumber].slice(0, mapping.generatedColumn)
      }

      for (let i = 0, ii = rawLines.length; i < ii; i++) {
        if (rawLines[i]) {
          lineData[i].unshift({ content: rawLines[i] })
        }
      }

      return lineData
    },

    mappingsView() {
      if (!this.sourceMapData) {
        return
      }

      const generatedMappings = this.mappings.generated
      const lineData = []

      if (this.generatedContent) {
        lineData.length = this.generatedContent.split(/\r?\n/g).length
      }

      for (const mapping of generatedMappings) {
        const lineNumber = mapping.generatedLine - 1

        if (!lineData[lineNumber]) {
          lineData[lineNumber] = []
        }

        const content = `${mapping.generatedColumn} => ${mapping.originalLine}:${mapping.originalColumn}`

        lineData[lineNumber].push({ content, mapping, id: genId(mapping), names: [this.sources[mapping.source], mapping.name] })
        lineData[lineNumber].push({ content: ' ' })
      }

      return lineData
    },

    selectedView() {
      const sourceContent = this.overrides[this.selectedIndex] || this.sourceContents[this.selectedIndex]

      if (!sourceContent) {
        return
      }

      const rawLines = sourceContent.split(/\r?\n/g)
      const lineData = rawLines.map(() => [])

      const originalMappings = this.mappings.original

      for (let i = sortedIndexBy(originalMappings, this.selectedIndex, 'source') - 1; i >= 0; i--) {
        const mapping = originalMappings[i]

        if (mapping.source !== this.selectedIndex) {
          continue
        }

        const lineNumber = mapping.originalLine - 1

        if (!lineData[lineNumber]) {
          lineData[lineNumber] = []
          rawLines[lineNumber] = ''
        }

        const [lastChunk] = lineData[lineNumber]

        if (lastChunk && lastChunk.mapping && lastChunk.mapping.originalColumn === mapping.originalColumn) {
          lastChunk.names.push(mapping.name)
          continue
        }

        const content = rawLines[lineNumber].slice(mapping.originalColumn)

        lineData[lineNumber].unshift({ content, mapping, id: genId(mapping), names: [mapping.name] })
        rawLines[lineNumber] = rawLines[lineNumber].slice(0, mapping.originalColumn)
      }

      for (let i = 0, ii = rawLines.length; i < ii; i++) {
        if (rawLines[i]) {
          lineData[i].unshift({ content: rawLines[i] })
        }
      }

      return lineData
    },
  },

  methods: {

    async handleFiles(files, type) {
      if (!files || !files.length) {
        return
      }
      if (files.length === 1 || type === 'original') {
        this.handleFile(files[0], type)
      }
      if (files[0].name.endsWith('.map')) {
        await this.handleFile(files[1], 'generated')
        this.handleFile(files[0], 'sourceMap')
      } else {
        await this.handleFile(files[0], 'generated')
        this.handleFile(files[1], 'sourceMap')
      }
    },

    async handleFile(file, type) {
      const content = await readAsText(file)
      switch (type) {
        case 'generated': {
          this.generatedContent = content
          if (!this.generatedInfo.inlineSourceMap) {
            break
          }
          this.sourceMapData = this.generatedInfo.inlineSourceMap
          this.selectedIndex = 0
          break
        }
        case 'sourceMap': {
          this.sourceMapData = JSON.parse(content)
          this.selectedIndex = 0
          break
        }
        case 'original': {
          this.$set(this.overrides, this.selectedIndex, content)
          break
        }
      }
    },
  },
})

function genId(mapping) {
  if (mapping.source == null) {
    return
  }
  return `${mapping.source} ${mapping.originalLine} ${mapping.originalColumn}`
}
