/**
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
 * 进阶：你可以设计并实现时间复杂度为 O(n) 的解决方案吗？
 * 示例 1：
 * 输入：nums = [100,4,200,1,3,2]
 * 输出：4
 * 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
 *
 * 示例 2：
 * 输入：nums = [0,3,7,2,5,8,4,6,0,1]
 * 输出：9
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive0 = function (nums) {
  if (nums.length === 0) return 0

  const arr = nums.sort((a, b) => a - b)
  const obj = {}
  obj[arr[0]] = [arr[0]]
  let temp = obj[arr[0]]
  for (let i = 1; i < arr.length; i++) {
    const diff = arr[i] - temp[temp.length - 1]
    if (diff === 1) {
      temp.push(arr[i])
    } else if (diff === 0) {
      continue
    } else {
      obj[arr[i]] = [arr[i]]
      temp = obj[arr[i]]
    }
  }
  return Math.max(...Object.values(obj).map(arr => arr.length))
};

var longestConsecutive = function (nums) {
  let num_set = new Set();
  for (const num of nums) {
    num_set.add(num);
  }

  let longestStreak = 0;

  for (const num of num_set) {
    if (!num_set.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (num_set.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
};
// 链接：https://leetcode-cn.com/problems/longest-consecutive-sequence/solution/zui-chang-lian-xu-xu-lie-by-leetcode-solution/

const nums = [100, 4, 200, 1, 3, 2, 2]
console.log(longestConsecutive(nums))