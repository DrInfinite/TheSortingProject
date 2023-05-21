#include "D:/Coding/Projects/OtherProjects/TheSortingProject/Functions/C++/MainMethod.hpp"

class StableSelectionSort
{
public:
  static void stableSelectionSort(int arr[], int n)
  {
    int i, j, min_idx;

    for (i = 0; i < n - 1; i++)
    {
      min_idx = i;
      for (j = i + 1; j < n; j++)
        if (arr[j] < arr[min_idx])
          min_idx = j;

      int key = arr[min_idx];
      while (min_idx > i)
      {
        arr[min_idx] = arr[min_idx - 1];
        min_idx--;
      }
      arr[i] = key;
    }
  }
};

int main(int argc, char const *argv[])
{
  int size = 4096 * 4;
  int *array = MainMethod::randomArray(size);
  MainMethod::normalArray(array, size);

  clock_t startTime = clock();
  StableSelectionSort::stableSelectionSort(array, size);
  clock_t endTime = clock();

  MainMethod::sortedArray(array, size);
  MainMethod::timeTaken(startTime, endTime);
  return 0;
}