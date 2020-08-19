/**
 * 爬楼梯：斐波那契数列
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const sqrt_5 = Math.sqrt(5);
  const fib_n = Math.pow((1 + sqrt_5) / 2, n + 1) - Math.pow((1 - sqrt_5) / 2,n + 1);
  return Math.round(fib_n / sqrt_5);
};
var climbStairs2 = function(n) {
  const dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for(let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

var climbStairs3 = function(n) {
  if (n <= 2) return n
  let a = 1, b = 2
  for(let i = 3; i <= n; i++) {
    [a, b] = [b, a + b]
  }
  return b;
};

var res = climbStairs3(10)

console.log({res})