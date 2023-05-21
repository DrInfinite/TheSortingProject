#include "D:/Coding/Projects/OtherProjects/TheSortingProject/Functions/C/MainMethod.h"

void selectionSort(int arr[], int n)
{
  int i, j, minIndex;
  for (i = 0; i < n - 1; i++)
  {
    minIndex = i;
    for (j = i + 1; j < n; j++)
      if (arr[j] < arr[minIndex])
        minIndex = j;
    swap(&arr[minIndex], &arr[i]);
  }
}

int main(int argc, char const *argv[])
{
  int size = 4096 * 4;
  int *array = randomArray(size);
  normalArray(array, size);

  clock_t startTime = clock();
  selectionSort(array, size);
  clock_t endTime = clock();

  sortedArray(array, size);
  timeTaken(startTime, endTime);
  return 0;
}
