/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const arr = strs.map(item => item.split(''))
  const minLength = Math.min(...arr.map(item => item.length))
  let [] = arr

  console.log({
    minLength
  })

  // const arr = strs.sort()
  // let max = 0
  for (let i = 0; i < minLength; i++) {
    let c = arr.map(item => item[i]).every()
  }

  // let i = 0
  // let obj = {}
  // while (arr[i]) {
  //   obj[]
  // }

  return arr
}


console.log('res:', longestCommonPrefix(["flower", "flow","flight"]))