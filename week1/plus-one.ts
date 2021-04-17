// https://leetcode-cn.com/problems/plus-one/
// 解题思路
// 从个位开始加一,判断是否需要进位,不需要的话,返回结果
// 需要的话,前一位加1,再判断进位,如果首位也需要进位,则需要
// 新建一个原数组长度+1的新数组保存数据
// 时间复杂度, O(n)
// 空间复杂度, O(n), 可能需要新数组
function plusOne(digits: number[]): number[] {
  if (digits[digits.length - 1] !== 9) {
    digits[digits.length - 1]++;
    return digits;
  }
  for (let i = digits.length - 1; i >= 0; i--) {
    if (++digits[i] % 10 !== 0) {
      return digits;
    }
    digits[i] = 0;
  }
  return [1].concat(digits);
}
