import { dailyTemperatures } from '../week1/interview/daily.temperatures';

describe('daily temperature', () => {
  const testData = [
    {
      tempratures: [13, 14, 15, 11, 9, 12, 16, 13],
      result: [1, 1, 4, 2, 1, 1, 0, 0],
    },
    {
      tempratures: [13, 12, 11, 10, 9, 8, 7, 6],
      result: [0, 0, 0, 0, 0, 0, 0, 0],
    },
    {
      tempratures: [13, 13, 13, 13, 13, 13, 13, 13],
      result: [0, 0, 0, 0, 0, 0, 0, 0],
    },
    {
      tempratures: [13, 14, 15, 16, 17, 18, 19, 20],
      result: [1, 1, 1, 1, 1, 1, 1, 0],
    },
  ];
  testData.forEach((t) => {
    test('test', () => {
      expect(dailyTemperatures(t.tempratures)).toEqual(t.result);
    });
  });
});
