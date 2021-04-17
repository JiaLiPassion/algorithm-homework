// https://leetcode-cn.com/problems/reverse-linked-list/
// 解题思路:
// 设置前置节点为空,当前节点为头结点,循环链表,存储当前节点的下一个节点,然后
// 当前节点的next指向前置节点,完成翻转后,前置节点设置为当前节点,当前节点
// 设置为存储的next节点.
// - 时间复杂度: O(n)
// - 空间复杂度: O(1)
import { ListNode } from '../lib';

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }
  let prev = null;
  let curr: ListNode | null = head;
  while (curr) {
    const next: ListNode | null = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
