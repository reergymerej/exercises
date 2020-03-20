const zeros = (n) => {
  let factors = 0

  for (let exp = 1; true; exp++) {
    const divisor = Math.pow(5, exp)
    const result = n / divisor
    factors += Math.floor(result)
    if (result < 1) {
      break
    }
  }
  return factors
}
