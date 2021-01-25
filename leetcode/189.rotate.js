/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  // const K = (k+1) % nums.length
  // console.log(K)
  // const pre = nums.splice((k + 1) % nums.length)
  // return pre.concat(nums)
  return nums.splice((k + 1) % nums.length).concat(nums)
};


let nums = [1,2,3,4,5,6,7], k = 1
const res = rotate(nums, k)

console.log(res)