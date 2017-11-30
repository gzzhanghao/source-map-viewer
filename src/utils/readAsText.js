export default function readAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader

    reader.onerror = reject
    reader.onload = () => resolve(reader.result)

    reader.readAsText(file)
  })
}
