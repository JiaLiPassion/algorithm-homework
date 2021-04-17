// https://leetcode-cn.com/problems/min-stack/submissions/
// 解题思路
// 同时维护一个最小数的栈min_stack,每push一个数到Stack,就同时push
// 一个最小数(push的新数最小数的栈顶元素里较小的数),这样保证
// min_stack栈顶是当前最小数,pop时也同时pop min_stack.
// - 时间复杂度: O(n)
// - 空间复杂度: O(n)
class MinStack {
  arr: number[] = [];
  min_stack: number[] = [];
  constructor() {}

  push(val: number): void {
    this.arr.push(val);
    this.min_stack.push(
      this.min_stack.length ? Math.min(val, this.min_stack[this.min_stack.length - 1]) : val
    );
  }

  pop(): void {
    this.arr.pop();
    this.min_stack.pop();
  }

  top(): number {
    return this.arr[this.arr.length - 1];
  }

  getMin(): number {
    return this.min_stack[this.arr.length - 1];
  }
}
