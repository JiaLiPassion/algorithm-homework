// 解题思路
// 初始化结果数组,长度和输入一致,值都是0
// 用栈存储单调递减数据,遇到大于栈顶,栈顶下标的结果就可以计算=i-栈顶下标
// 时间复杂度: O(n)
// 空间复杂度: O(n)
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
