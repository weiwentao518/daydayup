function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

sleep(100).then(() => {
  console.log(1000)
})


function unique(arr){
  return Array.from(new Set(arr))
}

console.log(unique([1, 1, 1, 2, 2, 3, 1]))