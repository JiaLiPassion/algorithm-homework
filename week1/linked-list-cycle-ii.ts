// https://leetcode-cn.com/problems/linked-list-cycle-ii/
// 解题思路
// 同环形链表第一题, 先用快慢指针找到是否有环,如果有环,从快慢指针
// 相遇的点慢指针走到环形起点等于从头结点走到环形起点.
// - 时间复杂性: O(n)
// - 空间复杂性: O(1)
import { ListNode } from '../lib';
function detectCycle(head: ListNode | null): ListNode | null {
  if (!head) {
    return head;
  }
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
    if (slow === fast) {
      let ptr: ListNode | null = head;
      while (slow !== ptr) {
        slow = slow!.next;
        ptr = ptr!.next;
      }
      return ptr;
    }
  }
  return null;
}
