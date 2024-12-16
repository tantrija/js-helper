import {
    isValidDate,
    isLeapYear,
    isPastDate,
    isFutureDate,
    isToday,
    isYesterday,
    isTomorrow,
} from '../../src/date/validation';

test('isValidDate returns true for valid dates', () => {
    expect(isValidDate(new Date('2024-01-01'))).toBe(true);
});

test('isLeapYear returns true for leap years', () => {
    expect(isLeapYear(2024)).toBe(true);
    expect(isLeapYear(2023)).toBe(false);
});

test('isPastDate returns true for dates in the past', () => {
    expect(isPastDate(new Date('2023-12-31'))).toBe(true);
});

test('isFutureDate returns true for dates in the future', () => {
    expect(isFutureDate(new Date('2024-12-31'))).toBe(true);
});

test('isToday returns true for today\'s date', () => {
    const today = new Date();
    expect(isToday(today)).toBe(true);
});

test('isYesterday returns true for yesterday\'s date', () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    expect(isYesterday(yesterday)).toBe(true);
});

test('isTomorrow returns true for tomorrow\'s date', () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    expect(isTomorrow(tomorrow)).toBe(true);
});
