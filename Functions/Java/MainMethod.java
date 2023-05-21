package Java;

import java.util.Arrays;

public class MainMethod {
  public static void normalArray(int array[]) {
    System.out.println("Before Sorting: " + "\n" + Arrays.toString(array) + "\n");
  }

  public static void sortedArray(int array[]) {
    System.out.println("After Sorting: " + "\n" + Arrays.toString(array) + "\n");
  }

  public static int[] randomArray() {
    int size = 4096 * 4;
    int[] array = new int[size];
    for (int i = 0; i < size; i++) {
      array[i] = (int) (Math.random() * 25600);
    }
    return array;
  }

  public static void timeTaken(long startTime, long endTime) {
    System.out.println("Time taken: " + (endTime - startTime) + " milliseconds");
  }

  // Only for BubbleSort and its variants
  public static void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}
