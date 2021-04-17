export class DoubleLinkedListNode<T> {
  prev: DoubleLinkedListNode<T> | null = null;
  next: DoubleLinkedListNode<T> | null = null;
  constructor(public val: T) {}
}

export class DoubleLinkedList<T> {
  head: DoubleLinkedListNode<T> | null = null;
  tail: DoubleLinkedListNode<T> | null = null;
  count = 0;

  findAt(position: number) {
    if (!this.count) {
      return null;
    }
    let curr: DoubleLinkedListNode<T> | null = null;
    if (position <= this.count / 2) {
      curr = this.head;
      while (position--) {
        curr = curr!.next;
      }
    } else {
      curr = this.tail;
      let n = this.count - position - 1;
      while (n--) {
        curr = curr!.prev;
      }
    }
    return curr;
  }

  insertAt(position: number, item: T) {
    const newNode = new DoubleLinkedListNode<T>(item);
    if (position < 0 || position > this.count) {
      throw new Error(`Out of bound, try to insert at ${position} to a ${this.count} length list`);
    }
    if (!this.count) {
      this.head = this.tail = newNode;
    } else if (position === 0) {
      this.head!.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    } else if (position === this.count) {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      let curr = this.findAt(position);
      newNode.prev = curr!.prev;
      curr!.prev!.next = newNode;
      newNode.next = curr;
      curr!.prev = newNode;
    }

    this.count++;
  }

  removeAt(position: number) {
    if (position < 0 || position >= this.count || !this.count) {
      throw new Error(`Out of bound, try to remove at ${position} to a ${this.count} length list`);
    }
    let curr = this.findAt(position);
    if (!curr) {
      return null;
    }
    if (curr.prev) {
      curr.prev.next = curr.next;
    }
    if (curr.next) {
      curr.next.prev = curr.prev;
    }
    if (curr === this.head) {
      this.head = curr.next;
    }
    if (curr === this.tail) {
      this.tail = curr.prev;
    }
    this.count--;
    return curr.val;
  }

  insertFront(item: T) {
    return this.insertAt(0, item);
  }

  peekFront() {
    return this.head && this.head.val;
  }

  insertBack(item: T) {
    return this.insertAt(this.count, item);
  }

  peekBack() {
    return this.tail && this.tail.val;
  }

  removeFront() {
    return this.removeAt(0);
  }

  removeBack() {
    return this.removeAt(this.count - 1);
  }

  length() {
    return this.count;
  }

  getArray(isHeadToTail: boolean = true) {
    let start = isHeadToTail ? this.head : this.tail;
    const arr = [];
    while (start) {
      arr.push(start.val);
      start = isHeadToTail ? start.next : start.prev;
    }
    return arr;
  }
}
