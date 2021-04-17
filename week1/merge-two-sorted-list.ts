// https://leetcode-cn.com/problems/merge-two-sorted-lists/
// 解题思路
// 新建一个dummyHead作为前置指针, 从头用两个指针比较两个链表,前置指针指向较小的节点
// 前置指针指向这个新的节点,较小的链表的指针后移,最后将前置指针指向还有剩余元素的链表的
// 指针.
// - 时间复杂度: O(n)
// - 空间复杂度: O(1)
import { ListNode } from '../lib';

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummyHead = new ListNode();
  let prev = dummyHead;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      prev.next = l1;
      prev = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      prev = l2;
      l2 = l2.next;
    }
  }
  prev.next = l1 ? l1 : l2;
  return dummyHead.next;
}
