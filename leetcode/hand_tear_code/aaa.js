const map = {
  '0-9': ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  '1-9': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
}

const check = (version) => {
  const arr = version.split('.')
  if (arr.length < 3) return false

  return arr.every(item => {
    if (item.length === 1) {
      return map['0-9'].includes(item)
    }

    return map['1-9'].includes(item[0]) &&
      item.split('').slice(1).every(i => map['0-9'].includes(i))
  })
}

const check2 = (version) => {
  const arr = version.split('.')
  if (arr.length < 3) return false

  return arr.every(item => {
    if (isNaN(item)) return false
    if (item.length > 1) return item[0] !== '0'

    return true
  })
}
const reg = /^(0|[1-9]\d*)(\.(0|[1-9]\d*)){2}$/

// console.log(reg.test('100.113.112'))

console.log(check2('0.1000.1'))
