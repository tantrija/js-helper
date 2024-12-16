import {
    getDateRange,
    getDaysBetween,
    getWeeksBetween,
    getMonthsBetween,
    getYearsBetween,
    getHoursBetween,
    getMinutesBetween,
    getSecondsBetween,
} from '../../src/date/ranges';

test('getDateRange returns an array of dates between two dates', () => {
    const start = new Date('2024-01-01');
    const end = new Date('2024-01-05');
    const range = getDateRange(start, end);
    expect(range).toHaveLength(5);
});

test('getDaysBetween calculates the correct number of days', () => {
    const start = new Date('2024-01-01');
    const end = new Date('2024-01-05');
    expect(getDaysBetween(start, end)).toBe(4);
});

test('getWeeksBetween calculates the correct number of weeks', () => {
    const start = new Date('2024-01-01'); // Monday
    const end = new Date('2024-02-01');   // Thursday
    expect(getWeeksBetween(start, end)).toBe(5); // Correct number of weeks is 5
});

test('getMonthsBetween calculates the correct number of months', () => {
    const start = new Date('2024-01-01');
    const end = new Date('2024-04-01');
    expect(getMonthsBetween(start, end)).toBe(3);
});

test('getYearsBetween calculates the correct number of years', () => {
    const start = new Date('2020-01-01');
    const end = new Date('2024-01-01');
    expect(getYearsBetween(start, end)).toBe(4);
});

test('getHoursBetween calculates the correct number of hours', () => {
    const start = new Date('2024-01-01T00:00:00');
    const end = new Date('2024-01-01T12:00:00');
    expect(getHoursBetween(start, end)).toBe(12);
});

test('getMinutesBetween calculates the correct number of minutes', () => {
    const start = new Date('2024-01-01T00:00:00');
    const end = new Date('2024-01-01T01:00:00');
    expect(getMinutesBetween(start, end)).toBe(60);
});

test('getSecondsBetween calculates the correct number of seconds', () => {
    const start = new Date('2024-01-01T00:00:00');
    const end = new Date('2024-01-01T00:01:00');
    expect(getSecondsBetween(start, end)).toBe(60);
});
