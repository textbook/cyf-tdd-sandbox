import formatLoanBalance from './wrong';

describe.skip('formatMortgageBalance function', () => {
  test('splits pounds and pence', () => {
    const value = 1.23;

    const result = formatLoanBalance(value);

    expect(result).toEqual(['£1', '23']);
  });

  test('formats pence to two decimal places', () => {
    const value = 1.0;

    const result = formatLoanBalance(value);

    expect(result).toEqual(['£1', '00']);
  });

  test('formats pounds with commas between thousands', () => {
    const value = 1000;

    const result = formatLoanBalance(value);

    expect(result).toEqual(['£1,000', '00']);
  });
});
