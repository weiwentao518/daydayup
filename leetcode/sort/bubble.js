const arr = [1, 20, 10, 30, 22, 11, 55, 24, 31, 88, 12, 100, 50, 1];
// const arr = [1, 20, 10, 30];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

function bubbleSortReverse(arr) {
  const len = arr.length
  for (let i = len - 1; i >= 0; i--) {
    for (let j = len - 1 - i; j >= 0; j--) {
      if (arr[j] < arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
console.log(bubbleSort(arr));