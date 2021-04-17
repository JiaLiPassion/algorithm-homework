// 利用双向链表实现的一个Deque.
import { DoubleLinkedList } from './double-linked-list';

export class Deque<T> {
  dblList = new DoubleLinkedList<T>();
  constructor() {}

  addFront(value: T) {
    this.dblList.insertFront(value);
  }
  removeFront() {
    return this.dblList.removeFront();
  }
  peekFront() {
    return this.dblList.peekFront();
  }
  addBack(value: T) {
    this.dblList.insertBack(value);
  }
  removeBack() {
    return this.dblList.removeBack();
  }
  peekBack() {
    return this.dblList.peekBack();
  }
  isEmpty() {
    return this.dblList.length() === 0;
  }
}
