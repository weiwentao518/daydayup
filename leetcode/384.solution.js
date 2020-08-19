/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.source = nums
  this.nums = nums
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  this.nums = this.source
  return this.source
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  const arr = []
  const indexArr = Object.keys(this.nums)
  let i = 0
  let cache = {}
  while (i < this.nums.length) {
    const temp = ~~(indexArr.length * Math.random())
    const randomIndex = indexArr[temp]
    indexArr.splice(temp, 1)

    if (cache[randomIndex] === undefined) {
      arr.push(this.nums[randomIndex])
      cache[randomIndex] = this.nums[randomIndex]
      i++
    }
  }
  return arr
};

var nums = [1, 2, 3]
var obj = new Solution(nums)
var param_1 = obj.shuffle()
var param_2 = obj.reset()
console.log({
  param_1,
  param_2,
})