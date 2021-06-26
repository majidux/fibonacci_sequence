function fibonacciNumber(num: number): number {
  let result: number;
  if (num === 1 || num === 2) {
    result = 1;
  } else {
    result = fibonacciNumber(num - 1) + fibonacciNumber(num - 2);
  }
  return result;
}

export function fibonacciSequence(length: number = 5): number[] {
  let arr: number[] = [];
  for (let iterator: number = 1; iterator < length; iterator++) {
    arr.push(fibonacciNumber(iterator));
  }
  return arr;
}
