/**
 * 字符          数值
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  const arr = s.split('')
  let res = 0

  for (let i = 0; i < arr.length; i++) {
    const roman = arr[i]
    const romanNext = arr[i + 1]
    const romanLast = arr[i - 1]
    if (roman === 'I' && romanNext && (romanNext === 'V' || romanNext === 'X')) {
      res -= map[roman]
    } else if (roman === 'I' && romanLast && (romanLast === 'V' || romanLast === 'X')) {
      res += map[roman]
    } else if (roman === 'X' && romanNext && (romanNext === 'L' || romanNext === 'C')) {
      res -= map[roman]
    } else if (roman === 'X' && romanLast && (romanLast === 'L' || romanLast === 'C')) {
      res += map[roman]
    } else if (roman === 'C' && romanNext && (romanNext === 'D' || romanNext === 'M')) {
      res -= map[roman]
    } else if (roman === 'C' && romanLast && (romanLast === 'D' || romanLast === 'M')) {
      res += map[roman]
    } else {
      res += map[roman]
    }

  }

  return res
}

console.log('res:', romanToInt('C'))