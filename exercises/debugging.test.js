import sortArray from './debugging';

describe.skip('sortArray function', () => {
  it('sorts the array', () => {
    const result = sortArray([2, 3, 1]);

    expect(result).toEqual([1, 2, 3]);
  });

  it('does not modify the original array', () => {
    const arr = [2, 3, 1];

    const result = sortArray(arr);

    expect(result).toEqual([1, 2, 3]);
    expect(arr).toEqual([2, 3, 1]);
  });
});
