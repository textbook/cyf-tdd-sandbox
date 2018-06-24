import messageSender from './requirements';

describe.skip('messageSender function', () => {
  test('sends SMS messages', () => {
    const message = { type: 'sms', body: 'Hello world!' };

    const result = messageSender(message);

    expect(result).toBe('Sending "Hello world!" via SMS');
  });

  test('sends email messages', () => {
    const message = { type: 'email', body: 'Hello world!' };

    const result = messageSender(message);

    expect(result).toBe('Sending "Hello world!" via email');
  });

  test('sends fax messages', () => {
    const message = { type: 'fax', body: 'Hello world!' };

    const result = messageSender(message);

    expect(result).toBe('Sending "Hello world!" via fax');
  });
});
