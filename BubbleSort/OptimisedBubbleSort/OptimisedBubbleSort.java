package OptimisedBubbleSort;

import Java.MainMethod;

class OptimisedBubbleSortAlgorithm {
  public static void optimisedBubbleSort(int arr[]) {
    int n = arr.length;
    boolean swapped;
    for (int i = 0; i < n - 1; i++) {
      swapped = false;
      for (int j = 0; j < n - i - 1; j++)
        if (arr[j] > arr[j + 1]) {
          MainMethod.swap(arr, j, j + 1);
          swapped = true;
        }
      if (swapped == false)
        break;
    }
  }
}

public class OptimisedBubbleSort {
  public static void main(String[] args) {
    int[] array = MainMethod.randomArray(4096);
    MainMethod.normalArray(array);

    long startTime = System.currentTimeMillis();
    OptimisedBubbleSortAlgorithm.optimisedBubbleSort(array);
    long endTime = System.currentTimeMillis();

    MainMethod.sortedArray(array);
    MainMethod.timeTaken(startTime, endTime);
  }
}
