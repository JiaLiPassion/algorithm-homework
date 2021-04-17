import { Stack } from '../../lib';
export function fieldSum(v: number[]): number {
  const stack = new Stack<number>();
  let sum = 0;
  v.push(Infinity);
  for (let i = 0; i < v.length; i++) {
    while (stack.length() > 0 && v[i] > v[stack.peek()!]) {
      const stackTop = stack.pop()!;
      sum += i - stackTop - 1;
    }
    stack.push(i);
  }
  return sum;
}
