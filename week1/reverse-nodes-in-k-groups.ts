// https://leetcode-cn.com/problems/reverse-nodes-in-k-group/submissions/
// 解题思路
// 把每一个K个元素作为一个Group整体,这个整体的数据结构有head,tail和next,那么要做的事情就是
// 1. 遍历链表,找出K个元素的Group
// 2. 对于K个元素的Group 内部是一个区间的链表,进行反转,如果元素不够K个,不做反转, 处理后重置
//    group的head,tail,next
// 3. group反转后,group的tail节点作为下一个group的prev 前置节点,将group连接起来.为了
//    统一处理,设置一个dummyHead作为首节点的前置节点.
// - 时间复杂度: O(n)
// - 空间复杂度: O(1)
import { ListNode } from '../lib';
interface KGroup {
  head: ListNode | null;
  tail: ListNode | null;
  next: ListNode | null;
}

function findKGroup(prev: ListNode | null, k: number): KGroup {
  const start = prev && prev.next;
  let end = prev;
  while (k--) {
    end = end && end.next;
  }
  return {
    head: start,
    tail: end,
    next: end && end.next,
  };
}

function reverse(group: KGroup) {
  if (!group.tail) {
    return;
  }
  let prev = null;
  let curr = group.head;
  while (curr !== group.next) {
    const next = curr!.next;
    curr!.next = prev;
    prev = curr;
    curr = next;
  }
  const head = group.head;
  group.head = group.tail;
  group.tail = head;
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  const dummyHead = new ListNode(undefined, head);
  let prev = dummyHead;

  while (true) {
    const group = findKGroup(prev, k);
    if (!group.tail) {
      break;
    }
    const next = group.next;
    reverse(group);
    group.tail.next = next;
    prev.next = group.head;
    prev = group.tail;
  }
  return dummyHead.next;
}
