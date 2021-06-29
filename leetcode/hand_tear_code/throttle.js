/**
 * 节流
 * @param {*} func 执行函数
 * @param {*} delay 延迟
 */
const throttle = function(func, delay = 1000) {
  let start = 0

  return function(_this, ...args) {
    const context = _this
    const curr = +new Date()

    if (curr - start > delay) {
      console.log({context, args})
      func.apply(context, args)
      start = curr
    }
  }
}

const consoler = throttle(function() {
  console.log('哈哈哈哈哈哈')
})

consoler()
consoler()
consoler()
consoler()
consoler()
consoler()