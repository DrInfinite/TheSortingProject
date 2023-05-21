#include <bits/stdc++.h>
using namespace std;

class MainMethod
{
public:
  static void normalArray(int array[], int n)
  {
    cout << "Before Sorting: "
         << "\n";
    for (int i = 0; i < n; i++)
      cout
          << array[i] << " ";
    cout << "\n"
         << endl;
  }

  static void sortedArray(int array[], int n)
  {
    cout << "After Sorting: "
         << "\n";
    for (int i = 0; i < n; i++)
      cout
          << array[i] << " ";
    cout << "\n"
         << endl;
  }

  static int *randomArray(int size)
  {
    int *array = new int[size];
    std::srand(static_cast<unsigned int>(std::time(nullptr)));
    for (int i = 0; i < size; ++i)
      array[i] = std::rand();
    return array;
  }

  static void timeTaken(clock_t startTime, clock_t endTime)
  {
    double timeTaken = double(endTime - startTime) / double(CLOCKS_PER_SEC);
    cout << "Time taken: " << fixed
         << timeTaken * 1000 << setprecision(2);
    cout << " milliseconds" << endl;
  }
};