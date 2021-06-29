/**
 * 防抖
 * @param {*} func 要执行的函数
 * @param {*} delay 延迟
 * @param {*} immediate 是否立即执行
 */
const debounce = function(func, delay = 1000, immediate = false) {
  let timer
  let _this = this

  return function() {
    if (immediate && timer === undefined) {
      func.apply(_this)
    }

    timer && clearTimeout(timer)

    timer = setTimeout(() => {
      timer = undefined
      if (!immediate) {
        func.apply(_this)
      }
    }, delay)
  }
}

const consoler = debounce(function(a) {
  console.log('哈哈哈哈哈哈', a)
}, 1000, true)

consoler()
consoler()