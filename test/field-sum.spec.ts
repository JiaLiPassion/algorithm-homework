import { fieldSum } from '../week1/interview/field-sum';
describe('field sum', () => {
  const testData = [
    {
      heights: [4, 3, 7, 1],
      result: 2,
    },
    {
      heights: [4, 3, 2, 1],
      result: 6,
    },
    {
      heights: [1, 2, 3, 4],
      result: 0,
    },
    {
      heights: [9, 5, 6, 4],
      result: 4,
    },
  ];

  testData.forEach((t) => {
    test('test', () => expect(fieldSum(t.heights)).toEqual(t.result));
  });
});
