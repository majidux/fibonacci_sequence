type FibonacciNumberTypes = {
  num: number;
  memo?: any;
};

function fibonacciNumber({ num, memo = {} }: FibonacciNumberTypes): number {
  if (num in memo) return memo[num];
  if (num <= 2) return 1;
  memo[num] =
    fibonacciNumber({ num: num - 1, memo }) +
    fibonacciNumber({ num: num - 2, memo });
  return memo[num];
}

export function fibonacciSequence(length: number = 5): number[] {
  let arr: number[] = [];
  for (let iterator: number = 1; iterator < length; iterator++) {
    arr.push(fibonacciNumber({ num: iterator }));
  }
  return arr;
}
