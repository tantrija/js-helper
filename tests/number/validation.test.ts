import { isEven, isOdd, isPrime, isInteger, isFloat, isPositive, isNegative, isZero, isFiniteNumber, isNaN } from '../../src/number/validation';

test('isEven', () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(5)).toBe(false);
});

test('isOdd', () => {
    expect(isOdd(3)).toBe(true);
    expect(isOdd(4)).toBe(false);
});

test('isPrime', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(13)).toBe(true);
});

test('isInteger', () => {
    expect(isInteger(4.5)).toBe(false);
    expect(isInteger(10)).toBe(true);
});

test('isFloat', () => {
    expect(isFloat(4.5)).toBe(true);
    expect(isFloat(10)).toBe(false);
});

test('isPositive', () => {
    expect(isPositive(5)).toBe(true);
    expect(isPositive(-5)).toBe(false);
});

test('isNegative', () => {
    expect(isNegative(-5)).toBe(true);
    expect(isNegative(5)).toBe(false);
});

test('isZero', () => {
    expect(isZero(0)).toBe(true);
    expect(isZero(5)).toBe(false);
});

test('isFiniteNumber', () => {
    expect(isFiniteNumber(100)).toBe(true);
    expect(isFiniteNumber(Infinity)).toBe(false);
});

test('isNaN', () => {
    expect(isNaN(NaN)).toBe(true);
    expect(isNaN(5)).toBe(false);
});
