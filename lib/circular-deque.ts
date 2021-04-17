// https://leetcode-cn.com/problems/design-circular-deque/
// 解题思路
// 基本和循环队列思路一致,看力扣的题解大部分使用双指针,我这里
// 还是利用headIndex一个指针加上count来计算
export class CircularDeque {
  arr: number[] = [];
  headIndex: number = 0;
  capacity: number = 0;
  count: number = 0;
  constructor(k: number) {
    this.capacity = k;
  }

  insertFront(value: number): boolean {
    if (this.capacity === this.count) {
      return false;
    }
    this.headIndex = (this.headIndex + this.capacity - 1) % this.capacity;
    this.arr[this.headIndex] = value;
    this.count++;
    return true;
  }

  insertLast(value: number): boolean {
    if (this.capacity === this.count) {
      return false;
    }
    this.arr[(this.headIndex + this.count) % this.capacity] = value;
    this.count++;
    return true;
  }

  deleteFront(): boolean {
    if (!this.count) {
      return false;
    }
    this.headIndex = (this.headIndex + 1) % this.capacity;
    this.count--;
    return true;
  }

  deleteLast(): boolean {
    if (!this.count) {
      return false;
    }
    this.count--;
    return true;
  }

  getFront(): number {
    if (!this.count) {
      return -1;
    }
    return this.arr[this.headIndex];
  }

  getRear(): number {
    if (!this.count) {
      return -1;
    }
    return this.arr[(this.headIndex + this.count - 1) % this.capacity];
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  isFull(): boolean {
    return this.count === this.capacity;
  }
}
