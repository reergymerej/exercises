// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
const moveZeros = (arr) => {
  const putAtEnd = []

  const putAtFront = arr.filter(x => {
    const moveToEnd = x === 0
    if (moveToEnd) {
      putAtEnd.push(x)
    }
    return !moveToEnd
  })

  return putAtFront.concat(putAtEnd)
}
