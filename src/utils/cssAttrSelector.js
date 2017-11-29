import cssesc from 'cssesc'

export default function cssAttrSelector(attr) {
  let selector = ''
  for (const key of Object.keys(attr)) {
    let val = attr[key]
    if (typeof val === 'string') {
      val = cssesc(val, { quotes: 'double' })
    }
    selector += `[${key}="${val}"]`
  }
  return selector
}
