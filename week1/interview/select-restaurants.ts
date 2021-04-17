// 解题思路
// 这个没用什么算法,直接利用Javascript数组的方法...
// 时间复杂度: O(n*logn) 排序的复杂度
// 空间复杂度: O(n)
export function filterRestaurants(restaurants: number[][], filters: number[]) {
  const flavor = filters[0];
  const maxPrice = filters[1];
  const maxDistance = filters[2];
  return restaurants
    .filter((r) => (flavor === 0 || r[2] === flavor) && r[3] <= maxPrice && r[4] <= maxDistance)
    .sort((r1, r2) => (r1[1] > r2[1] ? -1 : r1[1] < r2[1] ? 1 : r1[0] - r2[0]))
    .map((r) => r[0]);
}
