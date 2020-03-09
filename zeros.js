// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
const moveZeros = (arr) => {
  const result = []
  let i = 0
  arr.forEach(x => {
    const insertLeft = x !== 0
    result.splice(i, 0, x)
    if (insertLeft) {
      i++
    }
  })
  return result
}
