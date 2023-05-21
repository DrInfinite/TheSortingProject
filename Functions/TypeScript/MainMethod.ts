// Only for Bubble Sort and its variations
export function swap(arr: number[], xp: number, yp: number) {
  var temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

class PrintArray {
  public static normalArray(array: number[]) {
    console.log("Before Sorting: " + "\n" + array + "\n");
  };

  public static sortedArray(array: number[]) {
    console.log("After Sorting: " + "\n" + array + "\n");
  };
}

class RandomArray {
  public static randomArray(size: number): number[] {
    let array: number[] = [];
    for (let i = 0; i < size; i++) {
      array.push(Math.floor(Math.random() * 25600));
    }
    return array;
  };
}

class TimeTaken {
  public static timeTaken(callback: Function): string {
    const startTime = Date.now();
    callback();
    const endTime = Date.now();
    return `Time taken: ${endTime - startTime} milliseconds`;
  }
}

export function mainMethod(callback: Function) {
  let array = RandomArray.randomArray(4096);
  PrintArray.normalArray(array);
  const time = TimeTaken.timeTaken(() => callback(array));
  PrintArray.sortedArray(array);
  console.log(time);
}

export function mainMethodTwo(callback: Function) {
  let array = RandomArray.randomArray(4096);
  PrintArray.normalArray(array);
  const time = TimeTaken.timeTaken(() => callback(array, array.length));
  PrintArray.sortedArray(array);
  console.log(time);
}

