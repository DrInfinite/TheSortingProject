#include "D:/Coding/Projects/OtherProjects/TheSortingProject/Functions/C++/MainMethod.hpp"

using namespace std;

class RecursiveBubbleSort
{
public:
  static void recursiveBubbleSort(int arr[], int n)
  {
    if (n == 1)
      return;

    for (int i = 0; i < n - 1; i++)
      if (arr[i] > arr[i + 1])
        swap(arr[i], arr[i + 1]);

    recursiveBubbleSort(arr, n - 1);
  }
};

int main(int argc, char const *argv[])
{
  int size = 4096 * 4;
  int *array = MainMethod::randomArray(size);
  MainMethod::normalArray(array, size);

  clock_t startTime = clock();
  RecursiveBubbleSort::recursiveBubbleSort(array, size);
  clock_t endTime = clock();

  MainMethod::sortedArray(array, size);
  MainMethod::timeTaken(startTime, endTime);
  return 0;
}