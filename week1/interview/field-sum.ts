// 解题思路
// 用一个栈存储,栈中数单调递减,遇到比
// 栈顶大的数,则出栈,栈顶元素能看到的人为
// 当前遍历下标i - 栈顶下标 - 1
// 时间复杂度: O(n)
// 空间复杂度: O(n)
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
