// https://leetcode-cn.com/problems/valid-parentheses/
// 解题思路
// 1. 用map存储括号结束和开始的对应关系
// 2. 用栈存储每个字符
// 3. 遇到括号结束时候判断栈顶是否是对应的开始
//    如果是,栈顶出栈
//    如果不是,直接返回false
// 4. 最终栈里还有元素,则证明括号没有完全匹配,返回false,否则返回true
// - 时间复杂度: O(n)
// - 空间复杂度: O(1)

import { Stack } from '../lib';

const symbolMap: any = {
  '}': '{',
  ']': '[',
  ')': '(',
};

function isValid(s: string): boolean {
  const stack = new Stack<string>();
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    const symbolStart = symbolMap[c];
    if (symbolStart) {
      if (symbolStart !== stack.peek()) {
        return false;
      }
      stack.pop();
      continue;
    }
    stack.push(c);
  }
  return stack.length() === 0;
}
