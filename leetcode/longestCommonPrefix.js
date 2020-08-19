/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) return ""
  const minLength = Math.min(...strs.map(i => i.length))
  let index = 1
  let res = ""
  while (index <= minLength) {
    const arr = strs.map(i => {return i.slice(0, index)})
    const flag = arr.every((s, _, str) => !!s && s === str[0])
    index++
    if (flag) {
      res = arr[0]
    } else {
      break
    }
  }
  return res
}



console.log('res:', longestCommonPrefix(['a']))