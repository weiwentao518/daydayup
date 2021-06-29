const NUMS = new Array(10).fill(0).map((_, i) => i + '').concat('.')

const check = (version) => {
  const isLegal = version.split('').every(i => NUMS.includes(i))
  if (!isLegal) return false

  const arr = version.split('.')
  if (arr.length !== 3 || !arr.every(i => i.length)) return false


  return arr.every(item => {
    if (item.length === 1) return true

    return !item.startsWith('0')
  })
}

console.log(check('1.0.1111'))