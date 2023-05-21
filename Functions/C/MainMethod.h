#include <stdio.h>
#include <stdlib.h>
#include <time.h>

void normalArray(int arr[], int n)
{
  printf("Before Sorting:\n");
  for (int i = 0; i < n; i++)
  {
    printf("%d ", arr[i]);
  }
  printf("\n\n");
}

void sortedArray(int arr[], int n)
{
  printf("After Sorting:\n");
  for (int i = 0; i < n; i++)
  {
    printf("%d ", arr[i]);
  }
  printf("\n\n");
}

int *randomArray(int size)
{
  int *array = (int *)malloc(size * sizeof(int));
  srand((unsigned int)time(NULL));
  for (int i = 0; i < size; ++i)
  {
    array[i] = rand();
  }
  return array;
}

void timeTaken(clock_t startTime, clock_t endTime)
{
  double timeTaken = ((double)(endTime - startTime)) / CLOCKS_PER_SEC;
  printf("Time taken: %.2f milliseconds\n", timeTaken * 1000);
}

// Only for Bubble Sort and its variations
void swap(int *xp, int *yp)
{
  int temp = *xp;
  *xp = *yp;
  *yp = temp;
}