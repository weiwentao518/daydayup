const arr = [1, 20, 10, 30, 22, 11, 55, 24, 31, 88, 12, 100, 50];

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
  }
  return arr;
}

function selectionSortReverse(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let maxIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[maxIndex] < arr[j]) {
        maxIndex = j;
      }
    }
    swap(arr, i, maxIndex);
  }
  return arr;
}

console.log(selectionSort(arr));