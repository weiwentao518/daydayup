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
 * @param {number} n
 * @return {string}
 */
var intToRoman = function(n) {
  let res = ''
  let [M, MY] = [Math.floor(n / 1000), n % 1000]
  res += 'M'.repeat(M)

  let [C, CY] = [Math.floor(MY / 100), MY % 100]
  let tempC
  if (C === 9) {
    tempC = 'CM'
  } else if (C >= 5) {
    tempC = 'D'+ 'C'.repeat(C - 5)
  } else if (C === 4) {
    tempC = 'CD'
  } else {
    tempC = 'C'.repeat(C)
  }
  res += tempC

  let [X, XY] = [Math.floor(CY / 10), CY % 10]
  let tempX
  if (X === 9) {
    tempX = 'XC'
  } else if (X >= 5) {
    tempX = 'L'+ 'X'.repeat(X - 5)
  } else if (X === 4) {
    tempX = 'XL'
  } else  {
    tempX = 'X'.repeat(X)
  }
  res += tempX

  let tempI
  if (XY === 9) {
    tempI = 'IX'
  } else if (XY >= 5) {
    tempI = 'V'+ 'I'.repeat(XY - 5)
  } else if (XY === 4) {
    tempI = 'IV'
  } else {
    tempI = 'I'.repeat(XY)
  }
  res += tempI

  return res
}

console.log('res:', intToRoman(1))
