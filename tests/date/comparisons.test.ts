import {
    isBefore,
    isAfter,
    isSameDay,
    isSameMonth,
    isSameYear,
    isBetween,
    compareDates,
    isWeekend,
    isWeekday,
} from '../../src/date/comparisons';

test('isBefore returns true when the first date is before the second', () => {
    expect(isBefore(new Date('2024-01-01'), new Date('2024-01-02'))).toBe(true);
});

test('isAfter returns true when the first date is after the second', () => {
    expect(isAfter(new Date('2024-01-02'), new Date('2024-01-01'))).toBe(true);
});

test('isSameDay returns true for two dates on the same day', () => {
    const date1 = new Date('2024-01-01T00:00:00Z');
    const date2 = new Date('2024-01-01T23:59:59Z');
    expect(isSameDay(date1, date2)).toBe(true);
});

test('isSameMonth returns true for two dates in the same month', () => {
    expect(isSameMonth(new Date('2024-01-01'), new Date('2024-01-15'))).toBe(true);
});

test('isSameYear returns true for two dates in the same year', () => {
    expect(isSameYear(new Date('2024-01-01'), new Date('2024-12-31'))).toBe(true);
});

test('isBetween returns true when the date is between two others', () => {
    const date = new Date('2024-01-15');
    const start = new Date('2024-01-01');
    const end = new Date('2024-01-31');
    expect(isBetween(date, start, end)).toBe(true);
});

test('compareDates returns -1 when the first date is earlier', () => {
    expect(compareDates(new Date('2024-01-01'), new Date('2024-01-02'))).toBe(-1);
});

test('isWeekend returns true for Saturday or Sunday', () => {
    expect(isWeekend(new Date('2024-01-06'))).toBe(true); // Saturday
    expect(isWeekend(new Date('2024-01-07'))).toBe(true); // Sunday
});

test('isWeekday returns true for Monday to Friday', () => {
    expect(isWeekday(new Date('2024-01-01'))).toBe(true); // Monday
});
