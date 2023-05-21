#include "D:/Coding/Projects/OtherProjects/TheSortingProject/Functions/C/MainMethod.h"

void recursiveBubbleSort(int arr[], int n)
{
  if (n == 1)
    return;

  for (int i = 0; i < n - 1; i++)
  {
    if (arr[i] > arr[i + 1])
      swap(&arr[i], &arr[i + 1]);
  }

  recursiveBubbleSort(arr, n - 1);
}

int main(int argc, char const *argv[])
{
  int size = 4096;
  int *array = randomArray(size);
  normalArray(array, size);
  clock_t startTime = clock();
  recursiveBubbleSort(array, size);
  clock_t endTime = clock();
  sortedArray(array, size);
  timeTaken(startTime, endTime);
  return 0;
}