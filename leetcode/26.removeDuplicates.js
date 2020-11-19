/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//   for (let i = 0; i < nums.length - 1;) {
//     const curr = nums[i]
//     const next = nums[i+1]
//     if (curr === next) {
//       nums.splice(i, 1)
//       continue
//     } else {
//       i++
//     }
//   }
//   return nums.length
// };
// 双指针法
var removeDuplicates = function(nums) {
  let i = 0, j = 1;
  while (j < nums.length) {
    if (nums[i] !== nums[j]) {
      nums[i+1] = nums[j]
      i++
    }
    j ++
  }
  return i+1
};

const arr = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(arr))