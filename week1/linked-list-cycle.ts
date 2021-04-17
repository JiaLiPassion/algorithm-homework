// https://leetcode-cn.com/problems/linked-list-cycle/
// 解题思路:
// 快慢指针,慢指针一次一步,快指针一次两步,如果有环的话,那么快慢指针会相遇
// 没有环的话,快指针会走到最后.
// - 时间复杂性: O(n)
// - 空间复杂性: O(1)
import { ListNode } from '../lib';
function hasCycle(head: ListNode | null): boolean {
  if (!head) {
    return false;
  }
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
