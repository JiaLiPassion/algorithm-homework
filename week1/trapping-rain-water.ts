// https://leetcode-cn.com/problems/trapping-rain-water/
// 解题思路
// 循环数组,第一个和最后一个无法接雨水,从第二个循环到倒数第二个
// 查找每一列可能接的最大的水量等于左右两边最高的柱子中偏矮的高度减去自身
// 初始化双指针,每一列i左边最高的柱子max_left(i)等于左边最近的柱子i-1的高度和max_left(i-1)
// 里面高的那个,同理,右侧为max_right(i)等于右侧i+1和max_right(i+1)偏高的,同时双指针判断
// 如果左边比右边矮,那么接水以左边为准来算,然后左边算完移动左指针,反之右边
// - 时间复杂度: O(n)
// - 空间复杂度: O(1)
function trap(height: number[]): number {
  let left = 1;
  let right = height.length - 2;
  let max_left = 0;
  let max_right = 0;
  let sum = 0;
  for (let i = 1; i < height.length - 1; i++) {
    if (height[left - 1] < height[right + 1]) {
      max_left = Math.max(max_left, height[left - 1]);
      if (max_left > height[left]) {
        sum += max_left - height[left];
      }
      left++;
    } else {
      max_right = Math.max(max_right, height[right + 1]);
      if (max_right > height[right]) {
        sum += max_right - height[right];
      }
      right--;
    }
  }
  return sum;
}
