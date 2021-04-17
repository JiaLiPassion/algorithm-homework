import { Stack } from '../lib';
describe('stack', () => {
  let stack: Stack<number>;

  beforeEach(() => (stack = new Stack()));

  test('empty should have correct data', () => {
    expect(stack.length()).toBe(0);
    expect(stack.peek()).toBe(null);
    expect(stack.pop()).toBe(null);
  });

  test('push/pop should insert correct data', () => {
    stack.push(1);
    expect(stack.length()).toBe(1);
    expect(stack.peek()).toBe(1);
    stack.push(2);
    expect(stack.length()).toBe(2);
    expect(stack.peek()).toBe(2);

    expect(stack.pop()).toBe(2);
    expect(stack.length()).toBe(1);
    expect(stack.peek()).toBe(1);
    expect(stack.pop()).toBe(1);
    expect(stack.length()).toBe(0);
    expect(stack.peek()).toBe(null);
  });
});
