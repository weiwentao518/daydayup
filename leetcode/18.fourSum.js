/**
给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
注意：
答案中不可以包含重复的四元组。

示例：
给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
满足要求的四元组集合为：
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const res = []
  const len = nums.length
  if (!nums || len < 4) return res

  nums.sort((a, b) => a - b)
  for (let i = 0;i < len; i++) {
    const START = nums[i]
    if (i > 0 && START === nums[i - 1]) continue
    for (let j = i + 1; j < len; j++) {
      const SECOND = nums[j]
      if (j > i + 1 && SECOND === nums[j - 1]) continue
      let L = j + 1
      let R = len - 1
      while (L < R) {
        const sum = START + SECOND + nums[L] + nums[R]
        if (sum === target) {
          res.push([START, SECOND, nums[L], nums[R]])
          while (nums[L] === nums[L+1]) L++
          while (nums[R] === nums[R-1]) R--
          L++
          R--
        } else if (sum > target) {
          R--
        } else if (sum < target) {
          L++
        }
      }
    }
  }
  return res
};

// const arr = [-2, -1, 0, 0, 1, 2]
// const arr = [-3,-1,0,2,4,5]
const arr =[-2,-1,-1,1,1,2,2]
const target = 0
console.log(fourSum(arr, target))