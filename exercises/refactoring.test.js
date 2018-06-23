import myFunction from './refactoring';

describe.skip('myFunction', () => {
  test('returns a formatted summary', () => {
    expect(myFunction(28000, '1150L', 1000, 580, false))
      .toBe('Your gross income is £28000 and your net income is £22699.75.');
  });
});
