/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const NUMS1 = [...new Set(nums1)]
  const NUMS2 = [...new Set(nums2)]
  if (NUMS1.length <= NUMS2.length) {
    var [minNums, maxNums] = [NUMS1, NUMS2]
  } else {
    var [minNums, maxNums] = [NUMS2, NUMS1]
  }
  console.log({
    minNums, maxNums
  })
  const jio = []
  for (let i = 0; i < minNums.length; i++) {
    if (maxNums.indexOf(minNums[i]) !== -1) {
      jio.push(minNums[i])
    }
  }
  return [...new Set(jio)]
};

const res = intersection(
  [1,2,2,1],
  [2,2]
)

console.log(res)