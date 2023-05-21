import random
from time import time


def selectionSort(arr):
    n = len(arr)
    for i in range(n):
        minIndex = i
        for j in range(i+1, n):
            if arr[minIndex] > arr[j]:
                minIndex = j
        arr[i], arr[minIndex] = arr[minIndex], arr[i]


if __name__ == "__main__":
    array = []
    for i in range(4096*4):
        array.append(random.randint(0, 25600))
    print(f"Before Sorting: \n{array} \n")

    startTime = (time()*1000)
    selectionSort(array)
    endTime = (time()*1000)

    print(f"After Sorting: \n{array} \n")
    print(f"Time taken: {endTime-startTime} milliseconds")
