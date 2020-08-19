/**
 * @param {number[][]} triangle
 * @return {number}
 */
// var minimumTotal = function(triangle) {
//   let index = 0
//   return triangle.reduce((total, arr, i) => {
//     if (i === 0) {
//       total += arr[0]
//     } else {
//       index = arr[index] < arr[index + 1] ? index : index + 1
//       total +=arr[index]
//     }
//     return total
//   }, 0)
// }
const minimumTotal = (triangle) => {
  const dp = new Array(triangle[triangle.length - 1].length);
  // base case 是最后一行
  for (let i = 0; i < dp.length; i++) {
    dp[i] = triangle[triangle.length - 1][i];
  }
  console.log(dp)
  // 从倒数第二列开始迭代
  for (let i = dp.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
    }
  }
  console.log(dp)
  return dp[0];
};

var param = [
  [-1],
 [2, 3],
[1,-1,-3]
]
var param2 = [
   [2],
  [3,4],
 [6,5,7],
[4,1,8,3]
]

// var res = minimumTotal(param)

// console.log(res)


const arr = [1, 2, 3, 4]
arr.forEach(element => {
  console.log(element)
  if (element > 2) return
  console.log({element})
});