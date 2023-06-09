import { mainMethod, swap } from "../../Functions/TypeScript/MainMethod";

const bubbleSort = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++)
    for (let j = 0; j < arr.length - i; j++)
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
}

mainMethod((array: number[]) => bubbleSort(array));