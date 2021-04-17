// https://leetcode-cn.com/problems/container-with-most-water/submissions/
// 解题思路
// 双指针指向头尾, 因为面积等于两边柱子的比较矮的一边*两根柱子之间的距离,所以
// 比较双指针的高度,选择轿矮的计算面积后,移动比较矮的指针,直到指针相遇
// - 时间复杂性: O(n)
// - 空间复杂性: O(1)
function maxArea(height: number[]): number {
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    max = Math.max((right - left) * Math.min(height[left], height[right]), max);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
}
