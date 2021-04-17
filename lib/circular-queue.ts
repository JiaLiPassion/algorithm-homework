// https://leetcode-cn.com/problems/design-circular-queue/solution/
// 解题思路
// 利用headIndex和长度可以确定tail在哪里,插入时候在tail后面插入,删除时候
// 将headIndex后移,所有操作都要和capacity取余.
export class CircularQueue {
  arr: number[] = [];
  count = 0;
  capacity = 0;
  headIndex = 0;
  constructor(k: number) {
    this.capacity = k;
  }

  enQueue(value: number): boolean {
    if (this.count === this.capacity) {
      return false;
    }
    this.arr[(this.headIndex + this.count) % this.capacity] = value;
    this.count++;
    return true;
  }

  deQueue(): boolean {
    if (!this.count) {
      return false;
    }
    this.headIndex = (this.headIndex + 1) % this.capacity;
    this.count--;
    return true;
  }

  Front(): number {
    if (!this.count) {
      return -1;
    }
    return this.arr[this.headIndex];
  }

  Rear(): number {
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
