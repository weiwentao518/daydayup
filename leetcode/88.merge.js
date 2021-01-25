/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge0 = function (nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2)
  return nums1.sort((a, b) => a - b)
};

var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1
  let p2 = n - 1
  let end = m + n - 1
  while (p1 > 0 && p2 > 0) {
    nums1[end--] = nums1[p1] > nums2[p2] ?
      nums1[p1--] :
      nums2[p2--];
  }
  return {
    nums1,
    nums2,
    p1,
    p2,
    end
  }
};

// [1,2,8,0,0,0],
// 3,
// [2,5,6],
// 3,

const res = merge(
  [1, 2, 3, 0, 0, 0],
  3,
  [2, 5, 6],
  3,
)

console.log(res)