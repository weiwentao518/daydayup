/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0
  for (let i = 0; i < height.length; i++) {
    const startH = height[i]

    for (let j = height.length - 1; j > i; j--) {
      const endH = height[j]
      const h = endH - startH > 0 ? startH : endH
      const w = j - i
      const area = w * h

      if (area > max) {
        max = area
        if (startH < endH) break
      }
    }
  }

  return max
}

console.log('res:', maxArea([1,8,6,2,5,4,8,3,7]))
