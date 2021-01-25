const arr = [1, 20, 10, 30, 22, 11, 55, 24, 0, 31, 88, 12, 100, 50, 112];

function insertSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    const I = arr[i];
    for (let j = 0; j < i; j++) {
      const J = arr[j]
      if (I < J && j === 0) {
        arr.splice(i, 1);
        arr.unshift(I);
        break;
      } else if (I > J && I < arr[j + 1] && j < i - 1) {
        arr.splice(i, 1);
        arr.splice(j + 1, 0, I);
        break;
      }
    }
  }
  return arr;
}

console.log(insertSort(arr));