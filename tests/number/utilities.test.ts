import { normalize, mapRange, isDivisibleBy, digitSum, digitCount, toPercent, fromPercent, moduloSafe } from '../../src/number/utilities';

test('normalize', () => {
    expect(normalize(50, 0, 100)).toBe(0.5);
    expect(normalize(25, 0, 50)).toBe(0.5);
});

test('mapRange', () => {
    expect(mapRange(5, 0, 10, 0, 100)).toBe(50);
    expect(mapRange(25, 0, 50, 0, 1)).toBe(0.5);
});

test('isDivisibleBy', () => {
    expect(isDivisibleBy(10, 2)).toBe(true);
    expect(isDivisibleBy(10, 3)).toBe(false);
});

test('digitSum', () => {
    expect(digitSum(1234)).toBe(10);
});

test('digitCount', () => {
    expect(digitCount(12345)).toBe(5);
});

test('toPercent', () => {
    expect(toPercent(50, 200)).toBe('25.00%');
});

test('fromPercent', () => {
    expect(fromPercent('25%')).toBe(0.25);
});

test('moduloSafe', () => {
    expect(moduloSafe(-1, 5)).toBe(4);
    expect(moduloSafe(7, 5)).toBe(2);
});
