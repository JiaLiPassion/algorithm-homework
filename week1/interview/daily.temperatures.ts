import { Stack } from '../../lib';

export function dailyTemperatures(t: number[]): number[] {
  const stack = new Stack<number>();
  const result: number[] = new Array(t.length);
  Array.prototype.fill.call(result, 0, 0, t.length);
  for (let i = 0; i < t.length; i++) {
    while (!stack.isEmpty() && t[i] > t[stack.peek()!]) {
      result[stack.peek()!] = i - stack.pop()!;
    }
    stack.push(i);
  }
  return result;
}
