package SelectionSort;

import Java.MainMethod;

class SelectionSortAlgorithm {
  public static void selectionSort(int arr[]) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
      // Find the minimum element in unsorted array
      int min_idx = i;
      for (int j = i + 1; j < n; j++)
        if (arr[j] < arr[min_idx])
          min_idx = j;

      MainMethod.swap(arr, i, min_idx);
    }
  }
}

public class SelectionSort {
  public static void main(String[] args) {
    int[] array = MainMethod.randomArray();
    MainMethod.normalArray(array);

    long startTime = System.currentTimeMillis();
    SelectionSortAlgorithm.selectionSort(array);
    long endTime = System.currentTimeMillis();

    MainMethod.sortedArray(array);
    MainMethod.timeTaken(startTime, endTime);
  }
}