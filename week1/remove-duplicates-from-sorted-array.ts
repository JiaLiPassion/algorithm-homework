// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
// 解题思路
// 类似于移动零,快慢指针,快指针初始等于慢指针+1,慢指针的下一位为下一个和自己不相等的数
// 将要放的位置,快慢指针相互比较,如果不相等,慢指针的下一位设置为快指针的数字,然后移动
// 快慢指针,如果相等,慢指针不动,快指针移动.最终慢指针+1为不重复的长度.
// - 时间复杂度: O(n)
// - 空间复杂度: O(1)
function removeDuplicates(nums: number[]): number {
  let slow = 0;
  let fast = 1;
  while (fast < nums.length) {
    if (nums[fast] !== nums[slow]) {
      nums[++slow] = nums[fast];
    }
    fast++;
  }
  return slow + 1;
}
