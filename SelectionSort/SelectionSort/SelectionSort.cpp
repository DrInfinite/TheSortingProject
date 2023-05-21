#include "D:/Coding/Projects/OtherProjects/TheSortingProject/Functions/C++/MainMethod.hpp"

class SelectionSort
{
public:
  static void selectionSort(int arr[], int n)
  {
    int i, j, min_idx;

    for (i = 0; i < n - 1; i++)
    {
      min_idx = i;
      for (j = i + 1; j < n; j++)
        if (arr[j] < arr[min_idx])
          min_idx = j;

      swap(arr[min_idx], arr[i]);
    }
  }
};

int main(int argc, char const *argv[])
{
  int size = 4096 * 4;
  int *array = MainMethod::randomArray(size);
  MainMethod::normalArray(array, size);

  clock_t startTime = clock();
  SelectionSort::selectionSort(array, size);
  clock_t endTime = clock();

  MainMethod::sortedArray(array, size);
  MainMethod::timeTaken(startTime, endTime);
  return 0;
}
