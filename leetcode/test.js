function throlle(fn, delay) {
  let pre = new Date().getTime()
  const that = this
  return () => {
    const now = new Date().getTime()
    const args = Array.prototype.form.call(arguments)
    if (now - pre >= delay) {
      fn.apply(that, args)
      pre = now
    }
  }
}
