// 解题思路
// 使用map来保存数值和下标的对应关系,循环数组,查找target - nums[i]是否在map
// 中,如果存在,直接返回(因为只有一个答案)
// - 时间复杂度: O(n)
// - 空间复杂度: O(1)
function twoSum(nums: number[], target: number): number[] {
  const map: any = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const pairIdx = map[target - num];
    if (typeof pairIdx === 'number') {
      return [pairIdx, i];
    }
    map[num] = i;
  }
  return [];
}
