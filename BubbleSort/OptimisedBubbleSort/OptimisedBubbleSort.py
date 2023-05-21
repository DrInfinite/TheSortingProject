import random
from time import time


def optimisedBubbleSort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n-1-i):
            if arr[j] > arr[j+1]:
                swapped = True
                arr[j], arr[j+1] = arr[j+1], arr[j]
        if not swapped:
            break


if __name__ == "__main__":
    array = []
    for i in range(4096*4):
        array.append(random.randint(0, 25600))
    print(f"Before Sorting: \n{array} \n")

    startTime = (time()*1000)
    optimisedBubbleSort(array)
    endTime = (time()*1000)

    print(f"After Sorting: \n{array} \n")
    print(f"Time taken: {endTime-startTime} milliseconds")
