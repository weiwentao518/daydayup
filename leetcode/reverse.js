/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const limit = [-(2 ** 31), (2 ** 31) - 1]
  let res = x.toString().split('').reverse().join('')
  if (x < 0) {
    res = res.slice(-1) + res.slice(0, -1)
  }

  if (res <= limit[0] || res >= limit[1]) res = 0

  return res - 0
}


console.log('res:', reverse(1534236469))