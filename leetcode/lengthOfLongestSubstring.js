/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let ans = 0
  let res = 0
  let cache = []
  let sarr = s.split('')

  for (let i = 0; i < sarr.length; i ++) {
    const item = sarr[i]
    if (cache.indexOf(item) > -1) {
      res = ans >= res ? ans : res
      cache = cache.slice(cache.indexOf(item) + 1).concat(item)
      ans = cache.length
    } else {
      cache.push(item)
      ans += 1
    }
  }

  res = ans >= res ? ans : res

  console.log({
    cache,
    res
  })

  return res
}

var res = lengthOfLongestSubstring(' ')

console.log({
  res
})
