//
// 解题思路:
// 1. 先从小到大排序
// 2. 取第一个数,如果第一个数大于0,略过,因为三数之和必定大于0
//    如果第一个数已经处理过一次,并且和之前的数字相等,略过,去重
// 3. 第二个数取第一个数字的下标+1, 第三个数取数组最后一个下标
// 4. 求和
//    如果=0,放到结果中,并且左右下标分别尝试向中间走看看有没有重复的
//    如果<0,左指针向右走
//    如果>0,右指针向左走
// - 时间复杂度: O(n^2)
// - 空间复杂度: O(1)
function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  if (nums.length < 3) {
    return result;
  }
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    const a = nums[i];
    if (a > 0 || (i > 0 && nums[i] === nums[i - 1])) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = a + nums[left] + nums[right];
      if (sum === 0) {
        result.push([a, nums[left], nums[right]]);
        while (left < right && nums[left + 1] === nums[left]) {
          left++;
        }
        while (left < right && nums[right - 1] === nums[right]) {
          right--;
        }
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}
