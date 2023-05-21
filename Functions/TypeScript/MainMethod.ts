// Only for Bubble Sort and its variations
export const swap = (arr: number[], xp: number, yp: number) => {
  var temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

const normalArray = (array: number[]) => {
  console.log("Before Sorting: " + "\n" + array + "\n");
}

const sortedArray = (array: number[]) => {
  console.log("After Sorting: " + "\n" + array + "\n");
}

const randomArray = (size: number): number[] => {
  let array: number[] = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 25600));
  }
  return array;
}

const timeTaken = (callback: Function): string => {
  const startTime = Date.now();
  callback();
  const endTime = Date.now();
  return `Time taken: ${endTime - startTime} milliseconds`;
}

export const mainMethod = (callback: Function) => {
  let array = randomArray(4096 * 4);
  normalArray(array);
  const time = timeTaken(() => callback(array));
  sortedArray(array);
  console.log(time);
}

export const mainMethodTwo = (callback: Function) => {
  let array = randomArray(4096 * 4);
  normalArray(array);
  const time = timeTaken(() => callback(array, array.length));
  sortedArray(array);
  console.log(time);
}
