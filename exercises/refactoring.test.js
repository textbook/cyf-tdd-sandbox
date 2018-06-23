import { removeVowels } from './refactoring';

describe('the removeVowels function', () => {
  test('replaces consonants with underscores', () => {
    expect(removeVowels('hello')).toBe('_e__o');
  });

  test.skip('handles uppercase characters correctly', () => {
    expect(removeVowels('HELLO')).toBe('_E__O');
  });
});
