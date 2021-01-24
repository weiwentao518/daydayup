/**
 * 防抖
 * @param {*} func 要执行的函数
 * @param {*} delay 延迟
 * @param {*} immediate 是否立即执行
 */
const debounce = function(func, delay = 1000, immediate = false) {
  let timer

  return function(_this, ...args) {
    const context = _this

    timer && clearTimeout(timer)

    timer = setTimeout(() => {
      timer = undefined
      if (!immediate) {
        func.apply(context, args)
      }
    }, delay)

    if (immediate && timer === undefined) {
      func.apply(context, args)
    }
  }
}