import { mainMethod, swap } from "../../Functions/TypeScript/MainMethod";

const selectionSort = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++)
      if (arr[j] < arr[min]) min = j;
    swap(arr, i, min);
  }
}

mainMethod((array: number[]) => selectionSort(array));