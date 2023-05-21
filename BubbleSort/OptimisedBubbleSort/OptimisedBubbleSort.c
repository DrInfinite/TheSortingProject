#include "D:/Coding/Projects/OtherProjects/TheSortingProject/Functions/C/MainMethod.h"
#include <stdbool.h>

void optimisedBubbleSort(int arr[], int n)
{
  int i, j;
  bool swapped;
  for (i = 0; i < n - 1; i++)
  {
    swapped = false;
    for (j = 0; j < n - i - 1; j++)
    {
      if (arr[j] > arr[j + 1])
      {
        swap(&arr[j], &arr[j + 1]);
        swapped = true;
      }
    }
    if (swapped == false)
      break;
  }
}

int main(int argc, char const *argv[])
{
  int size = 4096;
  int *array = randomArray(size);
  normalArray(array, size);
  clock_t startTime = clock();
  optimisedBubbleSort(array, size);
  clock_t endTime = clock();
  sortedArray(array, size);
  timeTaken(startTime, endTime);
  return 0;
}