function firstNonRepeatingLetter(s) {
  for (let i = 0; i < s.length; i++) {
    const letter = s[i].toLowerCase()
    const regex = new RegExp(letter, 'gi')
    const matches = s.match(regex)
    const repeated = matches && matches.length > 1
    if (!repeated) {
      return s[i]
    }
  }

  return ''
}
