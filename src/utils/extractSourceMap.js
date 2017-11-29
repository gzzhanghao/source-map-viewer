import { fromSource, mapFileCommentRegex } from 'convert-source-map'
import { SourceMapConsumer } from 'source-map'

export default function extractMappings(content) {
  const sourceMap = fromSource(content)

  const mappings = []
  const sources = {}

  if (!sourceMap) {
    const match = mapFileCommentRegex.exec(content)
    return { mappings, sources, sourceMapFile: match && (match[1] || match[2]) }
  }

  const consumer = new SourceMapConsumer(sourceMap.sourcemap)

  consumer.eachMapping(map => {
    sources[map.source] = consumer.sourceContentFor(map.source, true)
    mappings.push(map)
  })

  return { mappings, sources }
}
