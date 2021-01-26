/**
给你一个由一些多米诺骨牌组成的列表 dominoes。
如果其中某一张多米诺骨牌可以通过旋转 0 度或 180 度得到另一张多米诺骨牌，我们就认为这两张牌是等价的。
形式上，dominoes[i] = [a, b] 和 dominoes[j] = [c, d] 等价的前提是 a==c 且 b==d，或是 a==d 且 b==c。
在 0 <= i < j < dominoes.length 的前提下，找出满足 dominoes[i] 和 dominoes[j] 等价的骨牌对 (i, j) 的数量。

示例：
输入：dominoes = [[1,2],[2,1],[3,4],[5,6]]
输出：1

提示：
1 <= dominoes.length <= 40000
1 <= dominoes[i][j] <= 9

链接：https://leetcode-cn.com/problems/number-of-equivalent-domino-pairs
 */

/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
  const num = new Array(100).fill(0);
  let ret = 0;
  for (const domino of dominoes) {
      const val = domino[0] < domino[1]
        ? domino[0] * 10 + domino[1]
        : domino[1] * 10 + domino[0];

      // console.log(domino, val, num[val])
      ret += num[val];
      num[val]++;
  }
  return ret;
};

const dominoes = [[1,2],[1,2],[1,1],[1,2],[2,2]]
// const dominoes = [[1,2],[2,1],[3,4],[5,6]]
console.log(numEquivDominoPairs(dominoes))