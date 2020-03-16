const fibonacci = (() => {
  const cache = {}
  return (n) => {
    if (cache[n]) {
      return cache[n]
    }

    if (n==0 || n == 1) {
      return n
    }

    const value = fibonacci(n-1, cache) + fibonacci(n-2, cache)
    cache[n] = value
    return value
  }
})()
