var func = (function (a) {
  console.log(1, {a})
  this.a = a;
  return function (a) {
    console.log(2, {a})
    a += this.a;
    return a;
  }
})((function (a, b) {
  return a;
}(1, 2)));

// console.log(func(4))

function add(x) {
  var sum = x;
  var tmp = function (y) {
    sum += y;
    return tmp;
  };
  tmp.valueOf = tmp.toString = function () {
    return sum;
  };
  return tmp;
}

const res = add(1)(2)(3)(4).toString()

// console.log(res)

/**
 * script0
 * promise1
 * script1
 * promise2
 * setTimeout1
 * promise0
 * setTimeout0
 */

const A = [1, 2];
const B = 'aaaa';
const C = /[\w]/g;
const D = new Date();
const E = new Error('error!!!');

const getType = (obj) => {
  const str = Object.prototype.toString.call(obj)
  const reg = /\[object ([a-zA-Z]*)\]/g
  const matches = reg.exec(str)
  if (matches && matches[1]) {
    return matches[1]
  }
  return typeof obj
}

// console.log(getType(A)) //array
// console.log(getType(B)) //string
// console.log(getType(C)) //regexp
// console.log(getType(D)) //date
// console.log(getType(E)) //error

const obj = {
  a: {
    b: {
      c: {
        d: 3
      }
    }
  }
}

const keyPath = (obj, paths = []) => {
  let res = obj
  while (paths.length && res) {
    const key = paths.shift()
    if (res && res[key]) {
      res = res[key]
    } else {
      res = undefined
    }
  }
  return res
}

console.log(keyPath(obj, ['a', 'b', 'c', 'd'])); // => 3
console.log(keyPath(obj, ['a', 'b', 'c'])); // => { d: 3 }
console.log(keyPath(obj, ['c', 'b', 'a'])); // => undefined
console.log(keyPath()); // => undefined

const _ = {
  chunk: function (arr, size) {
    const len = arr.length
    const res = []
    if (size === 0) return res
    if (len <= size) {
      res.push(arr)
      return res
    }

    for (let i = 0; i < len; i += size) {
      res.push(arr.slice(i, i + size))
    }
    return res
  }
}

// Underscore/Lodash
// console.log(_.chunk(['a', 'b', 'c', 'd'], 2)); // => [['a', 'b'], ['c', 'd']]
// console.log(_.chunk(['a', 'b', 'c', 'd'], 3)); // => [['a', 'b', 'c'], ['d']]
// console.log(_.chunk(['a', 'b', 'c', 'd'], 5)); // => [['a', 'b', 'c', 'd']]
// console.log(_.chunk(['a', 'b', 'c', 'd'], 0)); // => []

Array.prototype.filterr = function (test) {
  const list = this;
  const res = [];
  list.forEach(item => {
    if (test(item)) {
      res.push(item)
    }
  })
  return res
}

var a = [1, 2, 3];
var b = a.filterr(function (value) {
  return value <= 2;
}); // b ==> [1, 2]
// console.log(b)

class Event {

  constructor() {
    this._events = {}
  }

  on(event, callback) {
    const callbacks = this._events[event] || []
    callbacks.push(callback)
    this._events[event] = callbacks
  }

  off(event) {
    delete this._events[event]
  }

  trigger(event, ...args) {
    const callbacks = this._events[event]
    if (!callbacks || callbacks.length === 0) {
      throw new Error('You should register listener for event ' + event)
    }
    // const args = [].slice.call(arguments, 1)
    callbacks.forEach(fn => fn.apply(this, args))
  }
}

const loader = new Event();
// loader.on('loaded', event => {
//   console.log('loaded触发了：', event)
// }); // 注册事件
// loader.trigger('loaded', { data: 'data' }); // 触发事件
// loader.off('loaded'); // 注销事件

function queryParse(url) {
  let qs = {}
  if (!url) {
    return qs
  }
  url.replace(/([^?=&]+)(=([^&]*))?/g, ($0, $1, $2, $3) => {
    console.log({$0, $1, $2, $3})
    if ($3 === undefined) {
      return
    }
    qs[$1] = decodeURIComponent($3).split('#')[0]
  })
  return qs
}

const href = 'https://www.alipay.com?width=123&height=567&dpi=2#name'
// const params = queryParse(href);
// console.log(params); // {width: "123", height: "567", dpi: "2"}