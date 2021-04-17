import { filterRestaurants } from '../week1/interview/select-restaurants';

describe('select restaurants', () => {
  const testData = [
    {
      restaurants: [
        [1, 4, 1, 40, 10],
        [2, 8, 0, 50, 5],
        [3, 8, 1, 30, 4],
        [4, 10, 0, 10, 3],
        [5, 1, 1, 15, 1],
      ],
      filters: [1, 40, 10],
      result: [3, 1, 5],
    },
    {
      restaurants: [
        [1, 4, 1, 40, 10],
        [2, 8, 0, 50, 5],
        [3, 8, 1, 30, 4],
        [4, 10, 0, 10, 3],
        [5, 1, 1, 15, 1],
      ],
      filters: [0, 40, 10],
      result: [4, 3, 1, 5],
    },
  ];

  testData.forEach((t) => {
    test('test filter restaurants', () => {
      expect(filterRestaurants(t.restaurants, t.filters)).toEqual(t.result);
    });
  });
});
