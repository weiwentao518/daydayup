/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]
    console.log(n, map[n])
    if (map[n] !== undefined) {
      return n
    } else {
      map[n] = n
    }
  }
};
var arr = [0, 1, 0]
// var arr = [2, 3, 1, 0, 2, 5, 3]
var res = findRepeatNumber(arr)

console.log(res)