#include "D:/Coding/Projects/OtherProjects/TheSortingProject/Functions/C/MainMethod.h"

void bubbleSort(int arr[], int n)
{
  int i, j;
  for (i = 0; i < n - 1; i++)
    for (j = 0; j < n - i - 1; j++)
      if (arr[j] > arr[j + 1])
        swap(&arr[j], &arr[j + 1]);
}

int main(int argc, char const *argv[])
{
  int size = 4096;
  int *array = randomArray(size);
  normalArray(array, size);
  clock_t startTime = clock();
  bubbleSort(array, size);
  clock_t endTime = clock();
  sortedArray(array, size);
  timeTaken(startTime, endTime);
  return 0;
}
