function fibonacciNumber(num: number): number {
  if (num <= 2) return 1;
  return fibonacciNumber(num - 1) + fibonacciNumber(num - 2);
}

export function fibonacciSequence(length: number = 5): number[] {
  let arr: number[] = [];
  for (let iterator: number = 1; iterator < length; iterator++) {
    arr.push(fibonacciNumber(iterator));
  }
  return arr;
}
