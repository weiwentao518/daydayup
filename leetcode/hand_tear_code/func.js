// 重载
function add() {
  let sum = 0;
  const args = Array.prototype.slice.call(arguments)
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}
console.log(add());
console.log(add(1, 2));
console.log(add(1, 2, 3));