// https://leetcode-cn.com/problems/rotate-array/submissions/
// 解题思路
// 1. 反转整个链表
// 2. 反转0~k
// 3. 反转k~n
// - 时间复杂度: O(n)
// - 空间复杂度: O(1)
function reverse(nums: number[], start: number, end: number) {
  while (start < end) {
    const temp = nums[start];
    nums[start++] = nums[end];
    nums[end--] = temp;
  }
}

function rotate(nums: number[], k: number): void {
  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
}
