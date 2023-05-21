package StableSelectionSort;

import Java.MainMethod;

class StableSelectionSortAlgorithm {
  public static void stableSelectionSort(int arr[]) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
      int min_idx = i;
      for (int j = i + 1; j < n; j++)
        if (arr[j] < arr[min_idx])
          min_idx = j;

      int key = arr[min_idx];
      while (min_idx > i) {
        arr[min_idx] = arr[min_idx - 1];
        min_idx--;
      }
      arr[i] = key;
    }
  }
}

public class StableSelectionSort {
  public static void main(String[] args) {
    int[] array = MainMethod.randomArray();
    MainMethod.normalArray(array);

    long startTime = System.currentTimeMillis();
    StableSelectionSortAlgorithm.stableSelectionSort(array);
    long endTime = System.currentTimeMillis();

    MainMethod.sortedArray(array);
    MainMethod.timeTaken(startTime, endTime);
  }
}
