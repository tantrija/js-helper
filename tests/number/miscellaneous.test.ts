import { isArmstrongNumber, isPerfectNumber, isHarshadNumber, isAutomorphic, nextPrime, nearestPerfectSquare, isPalindromeNumber, kthRoot, getDigits, factorize, sumOfDivisors, hcfOfArray, lcmOfArray, goldenRatio } from '../../src/number/miscellaneous';

test('isArmstrongNumber', () => {
    expect(isArmstrongNumber(153)).toBe(true);
    expect(isArmstrongNumber(123)).toBe(false);
});

test('isPerfectNumber', () => {
    expect(isPerfectNumber(6)).toBe(true);
    expect(isPerfectNumber(28)).toBe(true);
});

test('isHarshadNumber', () => {
    expect(isHarshadNumber(18)).toBe(true);
    expect(isHarshadNumber(19)).toBe(false);
});

test('isAutomorphic', () => {
    expect(isAutomorphic(5)).toBe(true);
    expect(isAutomorphic(25)).toBe(true);
});

test('nextPrime', () => {
    expect(nextPrime(7)).toBe(11);
});

test('nearestPerfectSquare', () => {
    expect(nearestPerfectSquare(50)).toBe(49);
});

test('isPalindromeNumber', () => {
    expect(isPalindromeNumber(121)).toBe(true);
    expect(isPalindromeNumber(123)).toBe(false);
});

test('kthRoot', () => {
    expect(kthRoot(27, 3)).toBe(3);
});

test('getDigits', () => {
    expect(getDigits(1234)).toEqual([1, 2, 3, 4]);
});

test('factorize', () => {
    expect(factorize(12)).toEqual([1, 2, 3, 4, 6, 12]);
});

test('sumOfDivisors', () => {
    expect(sumOfDivisors(12)).toBe(28);
});

test('hcfOfArray', () => {
    expect(hcfOfArray([12, 15, 21])).toBe(3);
});

test('lcmOfArray', () => {
    expect(lcmOfArray([4, 6, 8])).toBe(24);
});

test('goldenRatio', () => {
    expect(goldenRatio()).toBeCloseTo(1.618, 3);
});
