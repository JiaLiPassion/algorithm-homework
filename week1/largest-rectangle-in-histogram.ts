// https://leetcode-cn.com/problems/largest-rectangle-in-histogram/
// 解题思路
// 最大面积取决于一个柱子能够向左右延伸的最大宽度,就是找左右边界(左右最近的比自己矮的柱子)
// 这里使用单调栈, 用一个栈保存还无法确定面积的柱子的下标,这个栈是单调递增的,因为
// 如果遇到比栈顶矮的柱子,那么栈顶的柱子的面积就可以确定了,这时候可以持续出栈直到
// 找到比栈顶元素比当前柱子矮. 最后栈里还会剩下最矮的元素需要计算,为了简化这个计算,
// 在给定数组左右加上高度为0的哨兵,这样就保证栈里不会剩下合法的元素了.
// - 时间复杂性: O(n)
// - 空间复杂性: O(n)

import { Stack } from '../lib';

function largestRectangleArea(heights: number[]): number {
  const stack = new Stack<number>();
  heights.splice(0, 0, 0);
  stack.push(0);
  heights.push(0);
  let max = 0;
  for (let i = 1; i < heights.length; i++) {
    while (heights[i] < heights[stack.peek()!]) {
      const area = heights[stack.pop()!] * (i - stack.peek()! - 1);
      max = Math.max(max, area);
    }
    stack.push(i);
  }
  return max;
}
