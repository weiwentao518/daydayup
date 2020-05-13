/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome2 = function(s) {
  let str = s
  let res = ''
  let max = 0

  if (str.length === 1) return str

  for (let i = 0, len = str.length; i < len; i ++) {
    for (let j = i + 1; j <= len; j ++) {
      const part = str.slice(i, j)
      if (isPalindrome(part) && part.length > max) {
        if (part.length > max) {
          max = part.length
          res = part
        }
      }
    }
  }

  return res
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let n = s.length;
  let res = '';
  let dp = Array.from(new Array(n),() => new Array(n).fill(0));
  for(let i = n-1;i >= 0;i--){
      for(let j = i;j < n;j++){
          dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i+1][j-1]);
          if(dp[i][j] && j - i +1 > res.length){
              res = s.substring(i,j+1);
          }
      }
  }
  return res;
};

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  var arr = x.toString().split('')
  var res = []
  for (let i = 0, len = arr.length; i < len / 2; i++) {
      if (arr[i] === arr[len - 1 - i]) {
          res.push(true)
      } else {
          res.push(false)
      }
  }
  return res.every(Boolean)
}

const res = longestPalindrome('booooooob')

console.log({
  res
})
