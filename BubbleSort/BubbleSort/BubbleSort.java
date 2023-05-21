package BubbleSort;

import Java.MainMethod;

class BubbleSortAlgorithm {
  public static void bubbleSort(int arr[]) {
    int n = arr.length;
    for (int i = 0; i < n; i++)
      for (int j = 0; j < n - i - 1; j++)
        if (arr[j] > arr[j + 1])
          MainMethod.swap(arr, j, j + 1);
  }
}

public class BubbleSort {
  public static void main(String[] args) {
    int[] array = MainMethod.randomArray();
    MainMethod.normalArray(array);

    long startTime = System.currentTimeMillis();
    BubbleSortAlgorithm.bubbleSort(array);
    long endTime = System.currentTimeMillis();

    MainMethod.sortedArray(array);
    MainMethod.timeTaken(startTime, endTime);
  }
}