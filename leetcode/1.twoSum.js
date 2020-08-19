/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const a = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const b = nums[j];
      if (a + b === target) {
        return [i, j]
      }
    }
  }
};

var nums = [2,7,11,15]
var target = 9
var res = twoSum(nums, target)

console.log(res)