import random
from time import time


def recursiveBubbleSort(arr, size):
    sorted = True
    # we are assuming that array is sorted
    for i in range(0, size-1):
        if arr[i] > arr[i+1]:
            # swap
            arr[i], arr[i+1] = arr[i+1], arr[i]
            sorted = False
    if sorted == False:
        # recursively calling until it was sorted.
        recursiveBubbleSort(arr, size)


if __name__ == "__main__":
    array = []
    for i in range(4096):
        array.append(random.randint(0, 25600))
    print(f"Before Sorting: \n{array} \n")

    startTime = (time()*1000)
    recursiveBubbleSort(array, array.__len__())
    endTime = (time()*1000)

    print(f"After Sorting: \n{array} \n")
    print(f"Time taken: {endTime-startTime} milliseconds")
