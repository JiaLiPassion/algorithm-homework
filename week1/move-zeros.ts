// https://leetcode-cn.com/problems/move-zeroes/submissions/
// 解题思路:
// 双指针:
// 1. nextNonZeroIndex指针指向下一个非零元素放入的位置
// 2. i 指针遍历数组
// 循环数组,
// - 如果元素等于0, 跳过
// - 如果元素不等于0
//   - 如果当前nextNonZeroIndex 和 i 相等,说明还没有找到0元素, ++nextNonZeroIndex
//   - 如果当前nextNonZeroIndex 和 i 不相等,说明找到了至少一个0元素, 将i所在的非0元素
//     放到nextNonZeroIndex, 并++nextNonZeroIndex, 并将i所在元素设置为0, 这时候数组状态
//     从nextNonZeroIndex到i都是0.
// - 时间复杂度: O(n)
// - 空间复杂度: O(1)

function moveZeros(nums: number[]): void {
  let nextNonZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (nextNonZeroIndex !== i) {
        nums[nextNonZeroIndex] = nums[i];
        nums[i] = 0;
      }
      nextNonZeroIndex++;
    }
  }
}
