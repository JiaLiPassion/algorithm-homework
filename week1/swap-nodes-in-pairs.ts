// https://leetcode-cn.com/problems/swap-nodes-in-pairs/submissions/
// 解题思路:
// 新建一个Dummy Node作为新的头结点,然后这个节点作为节点交换前置节点,
// 然后把前置节点后的每两个节点作为一个整体,并进行交换,交换后的尾
// 节点作为新的前置节点. 以此类推.
// - 时间复杂度: O(n)
// - 空间复杂度: O(1)
import { ListNode } from '../lib';
function swapPairs(head: ListNode | null): ListNode | null {
  const dummyHead = new ListNode(undefined, head);
  let prev = dummyHead;
  let curr = prev.next;
  while (curr) {
    let next = curr.next;
    if (!next) {
      break;
    }
    prev.next = next;
    curr.next = next.next;
    next.next = curr;

    prev = curr;
    curr = curr.next;
  }
  return dummyHead.next;
}
