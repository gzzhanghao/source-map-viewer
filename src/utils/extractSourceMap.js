import { fromSource, mapFileCommentRegex } from 'convert-source-map'
import { SourceMapConsumer } from 'source-map'

export default function extractMappings(content) {
  const sourceMap = fromSource(content)

  const originalMappings = []
  const generatedMappings = []
  const sourceContents = {}

  if (!sourceMap) {
    const match = mapFileCommentRegex.exec(content)
    return { generatedMappings, originalMappings, sourceContents, sourceMapFile: match && (match[1] || match[2]) }
  }

  const consumer = new SourceMapConsumer(sourceMap.sourcemap)

  consumer.eachMapping(map => {
    sourceContents[map.source] = consumer.sourceContentFor(map.source, true)
    generatedMappings.push(map)
  })

  consumer.eachMapping(map => {
    originalMappings.push(map)
  }, null, SourceMapConsumer.ORIGINAL_ORDER)

  return { generatedMappings, originalMappings, sourceContents }
}
