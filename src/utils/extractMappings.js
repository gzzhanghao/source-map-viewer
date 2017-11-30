import { BasicSourceMapConsumer } from 'source-map/lib/source-map-consumer'

const parser = Object.create(BasicSourceMapConsumer.prototype)

export default function extractMappings(sourceMap) {
  parser._parseMappings(sourceMap.mappings)

  const sources = []
  const sourcesContent = sourceMap.sourcesContent || []

  for (let i = 0, ii = sourceMap.sources.length; i < ii; i++) {
    sources.push({ path: sourceMap.sources[i], content: sourcesContent[i] })
  }

  return { sources, generatedMappings: parser.__generatedMappings, originalMappings: parser.__originalMappings }
}
