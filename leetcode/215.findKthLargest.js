/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 快速排序
var quickSort = function (arr) {
  // 递归出口就是数组长度为1
  if (arr.length <= 1) return arr
  //获取中间值的索引，使用Math.floor向下取整
  let index = Math.floor(arr.length / 2)
  // 使用splice截取中间值，第一个参数为截取的索引，第二个参数为截取的长度；
  // 如果此处使用pivot=arr[index]; 那么将会出现无限递归的错误；
  // splice影响原数组
  
  let pivot = arr.splice(index, 1)[0],
  left = [],
  right = [];
  for (let i = 0; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  let res = []
  left.length && (res = res.concat(quickSort(left)))
  res = res.concat([pivot])
  right.length && (res = res.concat(quickSort(right)))
  console.log({pivot, arr, left, right, res})
  return res
}

// var findKthLargest = function (nums, k) {
//   // const arr = nums.sort((a, b) => b - a)
//   const arr = quickSort(nums)
//   console.log(arr)
//   return arr[arr.length - k]
// };

// var nums = [3, 2, 1, 5, 6, 4]
// var k = 2
// var res = findKthLargest(nums, k)

// console.log({res})

let arr = [2, 9, 6, 7, 4, 3, 1, 7]
 console.log(quickSort(arr))