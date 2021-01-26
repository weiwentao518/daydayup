const obj = require('./module.js')

console.log(obj)
obj.name = 'Z'
setTimeout(() => {
  console.log(obj)
}, 1000);