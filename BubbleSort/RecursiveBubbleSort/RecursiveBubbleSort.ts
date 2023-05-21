import { mainMethodTwo, swap } from "../../Functions/TypeScript/MainMethod";

class RecursiveBubbleSort {
  public static recursiveBubbleSort(arr: number[], size: number) {
    let sorted = true;
    for (let i = 0; i < size - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        sorted = false;
      }
    }
    if (sorted == false) {
      this.recursiveBubbleSort(arr, size);
    }
  }
}

mainMethodTwo((array: number[], size: number) => RecursiveBubbleSort.recursiveBubbleSort(array, size));