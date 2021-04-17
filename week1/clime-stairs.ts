// https://leetcode-cn.com/problems/climbing-stairs/
// 解题思路:
// 第n级台阶的方式等于第n-1和第n-2级方式的和, 利用循环而非递归
// - 时间复杂性: O(n)
// - 空间复杂性: O(1)
function climeStairs(n: number): number {
  if (n <= 3) {
    return n;
  }
  let f1 = 2;
  let f2 = 3;
  let f3 = 0;
  for (let i = 4; i <= n; i++) {
    f3 = f1 + f2;
    f1 = f2;
    f2 = f3;
  }
  return f3;
}
