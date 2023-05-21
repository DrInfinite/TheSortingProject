import { mainMethod, swap } from "../../Functions/TypeScript/MainMethod";

class OptimisedBubbleSort {
  public static optimisedBubbleSort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
      let swapped = false;
      for (let j = 0; j < arr.length - i; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
          swapped = true;
        }
      }
      if (!swapped) break;
    }
  }
}

mainMethod((array: number[]) => OptimisedBubbleSort.optimisedBubbleSort(array));