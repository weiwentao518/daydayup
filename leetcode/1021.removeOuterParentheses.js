/**
示例 1：
输入："(()())(())"
输出："()()()"
解释：
输入字符串为 "(()())(())"，原语化分解得到 "(()())" + "(())"，
删除每个部分中的最外层括号后得到 "()()" + "()" = "()()()"。

示例 2：
输入："(()())(())(()(()))"
输出："()()()()(())"
解释：
输入字符串为 "(()())(())(()(()))"，原语化分解得到 "(()())" + "(())" + "(()(()))"，
删除每个部分中的最外层括号后得到 "()()" + "()" + "()(())" = "()()()()(())"。

示例 3：
输入："()()"
输出：""
解释：
输入字符串为 "()()"，原语化分解得到 "()" + "()"，
删除每个部分中的最外层括号后得到 "" + "" = ""。

链接：https://leetcode-cn.com/problems/remove-outermost-parentheses
 */
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses0 = function(S) {
  const arr = S.split('')
  const res = []
  let count = 0, index = 0
  arr.forEach((item, i) => {
    if (item === '(') {
      count += 1
    }
    if (item === ')') {
      count -= 1
    }
    if (count === 0 && i > 0) {
      res.push(arr.slice(index, i + 1))
      index = i + 1
    }
  })

  return res.map(kuo => {
    kuo.pop()
    kuo.shift()
    return kuo.join('')
  }).join('')
};

var removeOuterParentheses = function(S) {
  let count = 0, index = 0
  const res = []
  for (let i = 0; i < S.length; i++) {
    const s = S[i]
    if (s === '(') count++
    if (s === ')') count--
    if (count === 0) {
      res.push(S.slice(index, i + 1))
      index = i + 1
    }
  }
  return res.map(item => {
    return item.slice(1, -1)
  }).join('')
};

const k1 = "(()())(())"
const k2 = "(()())(())(()(()))"
const k3 = "()()"
const res = removeOuterParentheses(k1)
console.log(res)