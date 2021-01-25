// function sayHi() {
//   console.log(name) // undefined
//   console.log(age) // Uncaught ReferenceError: Cannot access 'age' before initialization
//   var name = 'Lydia'
//   let age = 21
// }

// console.log(sayHi())


// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1) // 3 3 3
// }

// for (let i = 0; i < 3; i++) { // 0 1 2
//   setTimeout(() => console.log(i), 1)
// }

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2
  },
  perimeter: () => {
    console.log('this.radius', this)
    return 2 * Math.PI * this.radius
  }
}


// console.log(shape.diameter())
// console.log(shape.perimeter.bind(shape)())
// console.log(shape.perimeter())

/**
 * 手撕bind
 */
Function.prototype.bind_1 = function (_this, ...args1) {
  const fn = this;
  return function (...args2) {
    return fn.apply(_this, ...args1, ...args2);
  }
}

Function.prototype.bind_2 = function (asThis) {
  const args = Array.prototype.slice.call(arguments, 1);
  var fn = this;
  if (typeof fn !== "function") {
    throw new Error("cannot bind non_function");
  }
  return function () {
    var args2 = Array.prototype.slice.call(arguments, 0);
    return fn.apply(asThis, args.concat(args2));
  };
}

const fun = function (mix = 0, add = 1) {
  return this.radius * mix + add
}

// console.log(fun())
// const bindFun = fun.bind_2(shape, 2, 10)
// console.log(bindFun())
// console.log(fun())

class EventHub {
  events = {}

  on(name, callback) {
    if (this.events[name]) {
      this.events[name].push(callback)
    } else {
      this.events[name] = [callback]
    }
  }

  off(name) {
    if (this.events[name]) {
      delete this.events[name]
    }
  }

  emit(name) {
    if (!this.events[name]) {
      throw Error(`The event ${name} is not registered`)
    }
    const args = Array.prototype.slice.call(arguments, 1)
    this.events[name].forEach(func => {
      func.apply(this, args)
    })
  }
}

const hub = new EventHub()

hub.on('fuck', (who) => {
  console.log(`fuck ${who}!`)
})

hub.on('fuck', (who) => {
  console.log(`${who} fuck?`)
})

// hub.off('fuck')

hub.emit('fuck', 'you')