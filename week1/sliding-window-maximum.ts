// https://leetcode-cn.com/problems/sliding-window-maximum/
// 解题思路
// 循环数组,将数字放到一个双向队列中,队列单调递减,遇到比队列尾部大的数
// 则将队列尾部的数字出列直到比当前循环数字大为止,同时判断队首的下标是否在当前窗口中,
// 如果不在,出列,这样保证队列首部为当前最大的数.
// - 时间复杂度: O(n)
// - 空间复杂度: O(1)
import { Deque } from '../lib';

function maxSlidingWindow(nums: number[], k: number): number[] {
  const queue = new Deque<number>();
  let left = 0;
  let right = 0;
  const result = [];
  while (right < nums.length) {
    while (!queue.isEmpty() && nums[queue.peekBack()!] < nums[right]) {
      queue.removeBack();
    }
    queue.addBack(right);
    while (queue.peekFront()! < left) {
      queue.removeFront();
    }
    if (right - left + 1 === k) {
      result.push(nums[queue.peekFront()!]);
      left++;
    }
    right++;
  }

  return result;
}
