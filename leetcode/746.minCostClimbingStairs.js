/**
 * 使用最小花费爬楼梯
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs0 = function(cost) {
  cost.push(0)
  let dp = [], n = cost.length
  dp[0] = cost[0]
  dp[1] = cost[1]
  for(let i = 2; i < n; i++){
    dp[i] = Math.min(dp[i-2] , dp[i-1]) + cost[i]
  }
  return dp[n-1]
};

var minCostClimbingStairs = function(cost) {
  let n = cost.length,
    n1 = cost[0],
    n2 = cost[1]
  for(let i = 2;i < n;i++){
    [n1, n2] = [n2, Math.min(n1,n2)+cost[i]]
  }
  return Math.min(n1,n2)
};
// var cost = [10, 15, 20]
var cost = [0,1,2,2]
// var cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]

var res = minCostClimbingStairs(cost)

console.log({res})