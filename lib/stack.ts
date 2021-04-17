import { DoubleLinkedList } from './double-linked-list';

export class Stack<T> {
  list: DoubleLinkedList<T> = new DoubleLinkedList<T>();

  push(item: T) {
    this.list.insertFront(item);
  }

  pop() {
    if (!this.list.length()) {
      return null;
    }
    return this.list.removeFront();
  }

  peek() {
    return this.list.peekFront();
  }

  length() {
    return this.list.length();
  }
}
