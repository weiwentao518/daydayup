/**
 * @param {number[]} nums
 * @return {number[][]}
 * @时间复杂度 O(n^2)
 */
var threeSum = function(nums) {
  const res = []
  const len = nums.length
  if (!nums || len < 3) return res

  nums.sort((a,b) => a - b)
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break
    if(i > 0 && nums[i] == nums[i-1]) continue; // 去重
    let L = i + 1, R = len - 1

    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      if (sum === 0) {
        res.push([nums[i], nums[L], nums[R]])
        while (L<R && nums[L] == nums[L+1]) L++; // 去重
        while (L<R && nums[R] == nums[R-1]) R--; // 去重
        L++
        R--
      }
      else if (sum > 0) R--
      else if (sum < 0) L++
    }
  }

  return JSON.stringify(res)
};

// [-4, -1, -1, 0, 1, 2]
// const array = [-1,0,1,2,-1,-4]
// const array = [-2,0,1,1,2]
const array = [-2,-1,0,1,2,3]
console.log(threeSum(array))