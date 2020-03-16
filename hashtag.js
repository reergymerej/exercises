const capitalize = (str) => {
  const head = str[0]
  const tail = str.substr(1)
  return `${head.toUpperCase()}${tail}`
}

function generateHashtag (str) {
  str = str.trim()

  const isInputValid = str !== ''
  if (!isInputValid) {
    return false
  }

  let hashtag = '#'
  const words = str.split(/\s+/g)
  words.forEach(word => {
    const capitalized = capitalize(word)
    hashtag = `${hashtag}${capitalized}`
  })

  const hashtagInvalid = hashtag.length > 140

  return !hashtagInvalid && hashtag
}
