import {
    addDays,
    subtractDays,
    addMonths,
    subtractMonths,
    addYears,
    subtractYears,
    startOfDay,
    endOfDay,
    startOfMonth,
    endOfMonth,
    startOfYear,
    endOfYear,
} from '../../src/date/manipulation';

test('addDays adds the correct number of days', () => {
    const date = new Date('2024-01-01');
    const result = addDays(date, 10);
    expect(result.toISOString()).toBe(new Date('2024-01-11').toISOString());
});

test('subtractDays subtracts the correct number of days', () => {
    const date = new Date('2024-01-01');
    const result = subtractDays(date, 10);
    expect(result.toISOString()).toBe(new Date('2023-12-22').toISOString());
});

test('addMonths adds the correct number of months', () => {
    const date = new Date('2024-01-01');
    const result = addMonths(date, 3);
    expect(result.toISOString()).toBe(new Date('2024-04-01').toISOString());
});

test('subtractMonths subtracts the correct number of months', () => {
    const date = new Date('2024-01-01');
    const result = subtractMonths(date, 3);
    expect(result.toISOString()).toBe(new Date('2023-10-01').toISOString());
});

test('addYears adds the correct number of years', () => {
    const date = new Date('2024-01-01');
    const result = addYears(date, 2);
    expect(result.toISOString()).toBe(new Date('2026-01-01').toISOString());
});

test('subtractYears subtracts the correct number of years', () => {
    const date = new Date('2024-01-01');
    const result = subtractYears(date, 2);
    expect(result.toISOString()).toBe(new Date('2022-01-01').toISOString());
});

test('startOfDay sets the time to 00:00:00.000 UTC', () => {
    const date = new Date('2024-01-01T15:00:00');
    const result = startOfDay(date);
    expect(result.toISOString()).toBe('2024-01-01T00:00:00.000Z');
});


test('endOfDay sets the time to 23:59:59.999 UTC', () => {
    const date = new Date('2024-01-01T15:00:00');
    const result = endOfDay(date);
    expect(result.toISOString()).toBe('2024-01-01T23:59:59.999Z');
});


test('startOfMonth sets the date to the 1st at 00:00:00.000 UTC', () => {
    const date = new Date('2024-01-15T15:00:00');
    const result = startOfMonth(date);
    expect(result.toISOString()).toBe('2024-01-01T00:00:00.000Z');
});


test('endOfMonth sets the date to the last day of the month at 23:59:59.999 UTC', () => {
    const date = new Date('2024-01-15T15:00:00');
    const result = endOfMonth(date);
    expect(result.toISOString()).toBe('2024-01-31T23:59:59.999Z');
});


test('startOfYear sets the date to January 1st at 00:00:00.000 UTC', () => {
    const date = new Date('2024-07-15T15:00:00');
    const result = startOfYear(date);
    expect(result.toISOString()).toBe('2024-01-01T00:00:00.000Z');
});


test('endOfYear sets the date to December 31st at 23:59:59.999 UTC', () => {
    const date = new Date('2024-07-15T15:00:00');
    const result = endOfYear(date);
    expect(result.toISOString()).toBe('2024-12-31T23:59:59.999Z');
});
