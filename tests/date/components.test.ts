import {
    getYear,
    getMonth,
    getDay,
    getWeekday,
    getHours,
    getMinutes,
    getSeconds,
    getMilliseconds,
    getTimeZoneOffset,
} from '../../src/date/components';

test('getYear returns the correct year', () => {
    const date = new Date('2024-01-01');
    expect(getYear(date)).toBe(2024);
});

test('getMonth returns the correct month (0-indexed)', () => {
    const date = new Date('2024-01-01');
    expect(getMonth(date)).toBe(0);
});

test('getDay returns the correct day of the month', () => {
    const date = new Date('2024-01-15');
    expect(getDay(date)).toBe(15);
});

test('getWeekday returns the correct day of the week (0 for Sunday)', () => {
    const date = new Date('2024-01-01'); // Monday
    expect(getWeekday(date)).toBe(1);
});

test('getHours returns the correct hour', () => {
    const date = new Date('2024-01-01T12:00:00Z');
    expect(getHours(date)).toBe(12); // UTC hour
});

test('getMinutes returns the correct minutes', () => {
    const date = new Date('2024-01-01T12:15:00Z');
    expect(getMinutes(date)).toBe(15); // UTC minutes
});

test('getSeconds returns the correct seconds', () => {
    const date = new Date('2024-01-01T12:15:30Z');
    expect(getSeconds(date)).toBe(30);
});

test('getMilliseconds returns the correct milliseconds', () => {
    const date = new Date('2024-01-01T12:15:30.123Z');
    expect(getMilliseconds(date)).toBe(123);
});

test('getTimeZoneOffset returns the correct timezone offset', () => {
    const date = new Date('2024-01-01');
    expect(getTimeZoneOffset(date)).toBe(date.getTimezoneOffset());
});
