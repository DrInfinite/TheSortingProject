import { mainMethod } from "../../Functions/TypeScript/MainMethod";

const stableSelectionSort = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++)
      if (arr[j] < arr[min]) min = j;
    const key = arr[min];
    while (min > i) {
      arr[min] = arr[min - 1];
      min--;
    }
    arr[i] = key;
  }
}

mainMethod((array: number[]) => stableSelectionSort(array));