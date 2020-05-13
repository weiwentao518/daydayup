/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  const dq = new Array(numRows)
  const zeto = numRows - 2
  let row = 0
  let start = 0

  for (let i = 0; i < numRows; i ++) {
    const arr = []
    dq[i] = arr
  }

  var dealEmptyColumn = function(element, yu) {
    for (let k = 0; k < numRows; k ++) {
      if (numRows - 1 - yu === k) {
        dq[k].push(element)
      } else {
        dq[k].push('')
      }
    }
  }

  for (let i = 0; i < s.length; i++) {
    const element = s.substring(i, i + 1)
    const yu = (i - start + 1) > numRows > 0 ? (i - start + 1) - numRows : 0

    if (yu > 0) {
      if (yu > zeto) {
        start = i
      } else {
        dealEmptyColumn(element, yu)
        continue
      }
    }

    dq[row].push(element)
    row = row === numRows - 1 ? 0 : row + 1
  }

  return dq.map(item => item.join('')).join('')
}

var s = 'LEETCODEISHIRING', numRows = 4

console.log('res:', convert(s, numRows))
