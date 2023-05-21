#include "D:/Coding/Projects/OtherProjects/TheSortingProject/Functions/C++/MainMethod.hpp"

using namespace std;

void bubbleSort(int arr[], int n)
{
  for (int i = 0; i < n - 1; i++)
    for (int j = 0; j < n - i - 1; j++)
      if (arr[j] > arr[j + 1])
        swap(arr[j], arr[j + 1]);
}

int main(int argc, char const *argv[])
{
  int size = 4096;
  int *array = MainMethod::randomArray(size);
  MainMethod::normalArray(array, size);
  clock_t startTime = clock();
  bubbleSort(array, size);
  clock_t endTime = clock();
  MainMethod::sortedArray(array, size);
  MainMethod::timeTaken(startTime, endTime);
  return 0;
}
