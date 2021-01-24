var fibonacci_1 = function (n) {
  console.count('fibonacci_1被执行的次数:')
  return n < 2 ? n : fibonacci_1(n - 1) + fibonacci_1(n - 2)
}

// fibonacci_1(10)

var fibonacci_2 = function (n) {
  var memory = [0, 1];

  (function run(n) {
    console.count('run执行次数')
    var result = memory[n]

    if (typeof memory[n] !== 'number') {
      result = run(n - 1) + run(n - 2)
      memory[n] = result
      console.count('计算次数')
    }

    return result
  })(n)

  return memory[n]
}

fibonacci_2(10)
