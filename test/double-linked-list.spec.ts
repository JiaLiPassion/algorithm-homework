import { DoubleLinkedList, DoubleLinkedListNode } from '../lib';

describe('double linked list', () => {
  let list: DoubleLinkedList<number>;
  beforeEach(() => {
    list = new DoubleLinkedList<number>();
  });

  test('empty list should have correct data', () => {
    expect(list.length()).toBe(0);
    expect(list.getArray(true)).toEqual([]);
    expect(list.getArray(false)).toEqual([]);
    expect(list.head).toEqual(null);
    expect(list.tail).toEqual(null);
  });

  test('remove from empty list should throw', () => {
    expect(() => {
      list.removeAt(0);
    }).toThrow();
    expect(() => {
      list.removeFront();
    }).toThrow();
    expect(() => {
      list.removeBack();
    }).toThrow();
  });

  describe('insert to empty list', () => {
    function verify() {
      expect(list.length()).toBe(1);
      expect(list.getArray(true)).toEqual([1]);
      expect(list.getArray(false)).toEqual([1]);
      expect(list.head!.val).toEqual(1);
      expect(list.tail!.val).toEqual(1);
      expect(list.head!.next).toEqual(null);
      expect(list.head!.prev).toEqual(null);
      expect(list.tail!.prev).toEqual(null);
      expect(list.tail!.next).toEqual(null);
    }
    test('insert to empty list should have correct data', () => {
      list.insertAt(0, 1);
      verify();
    });

    test('insertFront to empty list should have correct data', () => {
      list.insertFront(1);
      verify();
    });

    test('insertBack to empty list should have correct data', () => {
      list.insertBack(1);
      verify();
    });
  });

  describe('insert before to single item list', () => {
    function verify() {
      expect(list.length()).toBe(2);
      expect(list.getArray(true)).toEqual([1, 2]);
      expect(list.getArray(false)).toEqual([2, 1]);
      expect(list.head!.val).toEqual(1);
      expect(list.tail!.val).toEqual(2);
      expect(list.head!.next!.val).toEqual(2);
      expect(list.head!.prev).toEqual(null);
      expect(list.tail!.prev!.val).toEqual(1);
      expect(list.tail!.next).toEqual(null);
    }
    beforeEach(() => {
      list.insertAt(0, 2);
    });
    test('insertAt to empty list should have correct data', () => {
      list.insertAt(0, 1);
      verify();
    });

    test('insertFront to empty list should have correct data', () => {
      list.insertFront(1);
      verify();
    });
  });

  describe('remove from single item list', () => {
    function verify() {
      expect(list.length()).toBe(0);
      expect(list.getArray(true)).toEqual([]);
      expect(list.getArray(false)).toEqual([]);
      expect(list.head).toEqual(null);
      expect(list.tail).toEqual(null);
    }
    beforeEach(() => {
      list.insertAt(0, 1);
    });
    test('removeAt should have correct data', () => {
      expect(list.removeAt(0)).toEqual(1);
      verify();
    });

    test('removeFront should have correct data', () => {
      expect(list.removeFront()).toEqual(1);
      verify();
    });

    test('removeBack should have correct data', () => {
      expect(list.removeBack()).toEqual(1);
      verify();
    });
  });

  describe('insert after to single item list', () => {
    function verify() {
      expect(list.length()).toBe(2);
      expect(list.getArray(true)).toEqual([1, 2]);
      expect(list.getArray(false)).toEqual([2, 1]);
      expect(list.head!.val).toEqual(1);
      expect(list.tail!.val).toEqual(2);
      expect(list.head!.next!.val).toEqual(2);
      expect(list.head!.prev).toEqual(null);
      expect(list.tail!.prev!.val).toEqual(1);
      expect(list.tail!.next).toEqual(null);
    }
    beforeEach(() => {
      list.insertAt(0, 1);
    });
    test('insertAt should have correct data', () => {
      list.insertAt(1, 2);
      verify();
    });

    test('insertBack should have correct data', () => {
      list.insertBack(2);
      verify();
    });
  });

  describe('insert at head to multiple items list', () => {
    function verify() {
      expect(list.length()).toBe(3);
      expect(list.getArray(true)).toEqual([1, 2, 3]);
      expect(list.getArray(false)).toEqual([3, 2, 1]);
      expect(list.head!.val).toEqual(1);
      expect(list.tail!.val).toEqual(3);
      expect(list.head!.next!.val).toEqual(2);
      expect(list.head!.prev).toEqual(null);
      expect(list.tail!.prev!.val).toEqual(2);
      expect(list.tail!.next).toEqual(null);
      expect(list.head!.next!.prev!.val).toEqual(1);
      expect(list.head!.next!.next!.val).toEqual(3);
    }

    beforeEach(() => {
      list.insertAt(0, 2);
      list.insertAt(1, 3);
    });

    test('insertAt should have correct data', () => {
      list.insertAt(0, 1);
      verify();
    });

    test('insertBack should have correct data', () => {
      list.insertFront(1);
      verify();
    });
  });

  describe('remove at head to multiple items list', () => {
    function verify() {
      expect(list.length()).toBe(1);
      expect(list.getArray(true)).toEqual([2]);
      expect(list.getArray(false)).toEqual([2]);
      expect(list.head!.val).toEqual(2);
      expect(list.tail!.val).toEqual(2);
      expect(list.head!.next).toEqual(null);
      expect(list.head!.prev).toEqual(null);
      expect(list.tail!.prev).toEqual(null);
      expect(list.tail!.next).toEqual(null);
    }

    beforeEach(() => {
      list.insertAt(0, 1);
      list.insertAt(1, 2);
    });

    test('removeAt should have correct data', () => {
      expect(list.removeAt(0)).toEqual(1);
      verify();
    });

    test('removeFront should have correct data', () => {
      expect(list.removeFront()).toEqual(1);
      verify();
    });
  });

  describe('insert after tail to multiple items list', () => {
    function verify() {
      expect(list.length()).toBe(3);
      expect(list.getArray(true)).toEqual([1, 2, 3]);
      expect(list.getArray(false)).toEqual([3, 2, 1]);
      expect(list.head!.val).toEqual(1);
      expect(list.tail!.val).toEqual(3);
      expect(list.head!.next!.val).toEqual(2);
      expect(list.head!.prev).toEqual(null);
      expect(list.tail!.prev!.val).toEqual(2);
      expect(list.tail!.next).toEqual(null);
      expect(list.head!.next!.prev!.val).toEqual(1);
      expect(list.head!.next!.next!.val).toEqual(3);
    }

    beforeEach(() => {
      list.insertAt(0, 1);
      list.insertAt(1, 2);
    });

    test('insertAt should have correct data', () => {
      list.insertAt(2, 3);
      verify();
    });

    test('insertBack should have correct data', () => {
      list.insertBack(3);
      verify();
    });
  });

  describe('remove tail from multiple items list', () => {
    function verify() {
      expect(list.length()).toBe(1);
      expect(list.getArray(true)).toEqual([1]);
      expect(list.getArray(false)).toEqual([1]);
      expect(list.head!.val).toEqual(1);
      expect(list.tail!.val).toEqual(1);
      expect(list.head!.next).toEqual(null);
      expect(list.head!.prev).toEqual(null);
      expect(list.tail!.prev).toEqual(null);
      expect(list.tail!.next).toEqual(null);
    }

    beforeEach(() => {
      list.insertAt(0, 1);
      list.insertAt(1, 2);
    });

    test('removeAt should have correct data', () => {
      list.removeAt(1);
      verify();
    });

    test('removeBack should have correct data', () => {
      list.removeBack();
      verify();
    });
  });

  describe('insert in the middle of the multiple items list', () => {
    function verify() {
      expect(list.length()).toBe(3);
      expect(list.getArray(true)).toEqual([1, 2, 3]);
      expect(list.getArray(false)).toEqual([3, 2, 1]);
      expect(list.head!.val).toEqual(1);
      expect(list.tail!.val).toEqual(3);
      expect(list.head!.next!.val).toEqual(2);
      expect(list.head!.prev).toEqual(null);
      expect(list.tail!.prev!.val).toEqual(2);
      expect(list.tail!.next).toEqual(null);
      expect(list.head!.next!.prev!.val).toEqual(1);
      expect(list.head!.next!.next!.val).toEqual(3);
    }

    beforeEach(() => {
      list.insertAt(0, 1);
      list.insertAt(1, 3);
    });

    test('insertAt should have correct data', () => {
      list.insertAt(1, 2);
      verify();
    });
  });

  describe('remove from the middle of the multiple items list', () => {
    function verify() {
      expect(list.length()).toBe(2);
      expect(list.getArray(true)).toEqual([1, 3]);
      expect(list.getArray(false)).toEqual([3, 1]);
      expect(list.head!.val).toEqual(1);
      expect(list.tail!.val).toEqual(3);
      expect(list.head!.next!.val).toEqual(3);
      expect(list.head!.prev).toEqual(null);
      expect(list.tail!.prev!.val).toEqual(1);
      expect(list.tail!.next).toEqual(null);
    }

    beforeEach(() => {
      list.insertAt(0, 1);
      list.insertAt(1, 2);
      list.insertAt(2, 3);
    });

    test('removeAt should have correct data', () => {
      list.removeAt(1);
      verify();
    });
  });

  describe('insert at the end of the multiple items list', () => {
    function verify() {
      expect(list.length()).toBe(4);
      expect(list.getArray(true)).toEqual([1, 2, 3, 4]);
      expect(list.getArray(false)).toEqual([4, 3, 2, 1]);
      expect(list.head!.val).toEqual(1);
      expect(list.tail!.val).toEqual(4);
      expect(list.head!.next!.val).toEqual(2);
      expect(list.head!.prev).toEqual(null);
      expect(list.tail!.prev!.val).toEqual(3);
      expect(list.tail!.next).toEqual(null);
      expect(list.head!.next!.prev!.val).toEqual(1);
      expect(list.head!.next!.next!.val).toEqual(3);
    }

    beforeEach(() => {
      list.insertAt(0, 1);
      list.insertAt(1, 2);
      list.insertAt(2, 4);
    });

    test('insertAt should have correct data', () => {
      list.insertAt(2, 3);
      verify();
    });
  });

  describe('remove at the end of the multiple items list', () => {
    function verify() {
      expect(list.length()).toBe(2);
      expect(list.getArray(true)).toEqual([1, 2]);
      expect(list.getArray(false)).toEqual([2, 1]);
      expect(list.head!.val).toEqual(1);
      expect(list.tail!.val).toEqual(2);
      expect(list.head!.next!.val).toEqual(2);
      expect(list.head!.prev).toEqual(null);
      expect(list.tail!.prev!.val).toEqual(1);
      expect(list.tail!.next).toEqual(null);
    }

    beforeEach(() => {
      list.insertAt(0, 1);
      list.insertAt(1, 2);
      list.insertAt(2, 3);
    });

    test('removeAt should have correct data', () => {
      list.removeAt(2);
      verify();
    });
  });
});
