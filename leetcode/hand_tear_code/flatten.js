function flat0 (oldarr, deep, res = [], now = 1) {
  oldarr.length > 0 && oldarr.forEach(item => {
    if (item instanceof Array && deep > now) {
      flat(item, deep, res, now + 1)
    }
    else {
      res.push(item)
    }
  });
  return res;
}

function flat (arr, deep) {
  let res = []
  let flag = 1
  if (arr.length === 0) return []

  function flatten (list) {
    list.forEach(i => {
      console.log(Object.prototype.toString.call(i))
      if (Object.prototype.toString.call(i) === '[object Array]' && deep > flag) {
        flag += 1
        flatten(i)
      } else {
        res.push(i)
      }
    })
  }

  flatten(arr)

  return res;
}

// console.log(flat([1, 2, [3, 4, 5, [6]]], 2))

// Object.prototype.toString.call(i)

const is = type => target => Object.prototype.toString.call(target) === `[object ${type}]`
const isArray = is('Array')

console.log(isArray([1, 2, 3]))