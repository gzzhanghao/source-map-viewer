import { fromSource, mapFileCommentRegex } from 'convert-source-map'

import extractMappings from './extractMappings'

export default function extractSourceMap(content) {
  const sourceMap = fromSource(content)

  if (sourceMap) {
    return extractMappings(sourceMap.sourcemap)
  }
  const match = mapFileCommentRegex.exec(content)
  return { sourceMapFile: match && (match[1] || match[2]) }
}
