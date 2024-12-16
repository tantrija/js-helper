import {
    getCurrentDate,
    getCurrentTime,
    getCurrentDateTime,
    formatDate,
    parseDate,
    toUnixTimestamp,
    fromUnixTimestamp,
    cloneDate,
  } from '../../src/date/basic';
  
  test('getCurrentDate returns a valid date', () => {
    const date = getCurrentDate();
    expect(date).toBeInstanceOf(Date);
  });
  
  test('getCurrentTime returns a valid time string', () => {
    const time = getCurrentTime();
    expect(time).toMatch(/^\d{2}:\d{2}:\d{2}/);
  });
  
  test('getCurrentDateTime returns a valid ISO string', () => {
    const dateTime = getCurrentDateTime();
    expect(() => new Date(dateTime)).not.toThrow();
  });
  
  test('formatDate formats a date correctly', () => {
    const date = new Date('2024-01-01');
    expect(formatDate(date, 'YYYY-MM-DD')).toBe('2024-01-01');
  });
  
  test('parseDate parses a date string correctly', () => {
    const dateString = '2024-01-01T00:00:00Z';
    const date = parseDate(dateString);
    expect(date.toISOString()).toBe('2024-01-01T00:00:00.000Z');
  });
  
  test('toUnixTimestamp converts a date to a Unix timestamp', () => {
    const date = new Date('2024-01-01T00:00:00Z');
    expect(toUnixTimestamp(date)).toBe(1704067200);
  });
  
  test('fromUnixTimestamp converts a Unix timestamp to a date', () => {
    const timestamp = 1704067200;
    const date = fromUnixTimestamp(timestamp);
    expect(date.toISOString()).toBe('2024-01-01T00:00:00.000Z');
  });
  
  test('cloneDate creates a new date object', () => {
    const date = new Date('2024-01-01');
    const cloned = cloneDate(date);
    expect(cloned).not.toBe(date);
    expect(cloned.getTime()).toBe(date.getTime());
  });
  