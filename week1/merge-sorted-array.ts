// https://leetcode-cn.com/problems/merge-sorted-array/submissions/
// 解题思路
// 从后向前比较两个数组,分配两个指针指向数组尾部,大的数字放到tail位置,并递减指针
// 最后如果第二个数组还有数字没有走完,直接补充tail,第一个数组有数字没有补完,不需要
// 做额外处理因为最终是保存在第一个数组,剩下的都是最小的数字,这些数字已经在正确的
// 位置上了
// - 时间复杂度: O(n)
// - 空间复杂度: O(1)
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = m - 1;
  let p2 = n - 1;
  let tail = m + n - 1;
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[tail--] = nums1[p1--];
    } else {
      nums1[tail--] = nums2[p2--];
    }
  }
  while (p2 >= 0) {
    nums1[tail--] = nums2[p2--];
  }
}
