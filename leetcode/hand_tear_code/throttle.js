/**
 * 节流
 * @param {*} func 执行函数
 * @param {*} delay 延迟
 */
const throttle = function(func, delay = 300) {
  let start = +new Date()

  return function(_this, ...args) {
    const context = _this
    const curr = +new Date()
    if (curr - start > wait) {
      func.apply(context, args)
      start = curr
    }
  }
}