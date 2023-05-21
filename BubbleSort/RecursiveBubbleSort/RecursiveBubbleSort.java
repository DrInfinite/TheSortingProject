package RecursiveBubbleSort;

import Java.MainMethod;

class RecursiveBubbleSortAlgorithm {
  public static void recursiveBubbleSort(int arr[], int n) {
    if (n == 1)
      return;
    for (int i = 0; i < n - 1; i++)
      if (arr[i] > arr[i + 1])
        MainMethod.swap(arr, i, i + 1);
    recursiveBubbleSort(arr, n - 1);
  }
}

public class RecursiveBubbleSort {
  public static void main(String[] args) {
    int[] array = MainMethod.randomArray(4096);
    MainMethod.normalArray(array);

    long startTime = System.currentTimeMillis();
    RecursiveBubbleSortAlgorithm.recursiveBubbleSort(array, array.length);
    long endTime = System.currentTimeMillis();

    MainMethod.sortedArray(array);
    MainMethod.timeTaken(startTime, endTime);
  }
}
