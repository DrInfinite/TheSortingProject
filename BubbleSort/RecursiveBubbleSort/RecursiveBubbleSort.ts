import { mainMethodTwo, swap } from "../../Functions/TypeScript/MainMethod";

const recursiveBubbleSort = (arr: number[], size: number) => {
  let sorted = true;
  for (let i = 0; i < size - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      swap(arr, i, i + 1);
      sorted = false;
    }
  }
  if (sorted == false) {
    recursiveBubbleSort(arr, size);
  }
}

mainMethodTwo((array: number[], size: number) => recursiveBubbleSort(array, size));