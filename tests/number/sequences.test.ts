import { arithmeticProgression, geometricProgression, primeFactors, collatzSequence, pascalTriangle } from '../../src/number/sequences';

test('arithmeticProgression', () => {
    expect(arithmeticProgression(1, 2, 5)).toEqual([1, 3, 5, 7, 9]);
});

test('geometricProgression', () => {
    expect(geometricProgression(2, 3, 4)).toEqual([2, 6, 18, 54]);
});

test('primeFactors', () => {
    expect(primeFactors(60)).toEqual([2, 2, 3, 5]);
});

test('collatzSequence', () => {
    expect(collatzSequence(6)).toEqual([6, 3, 10, 5, 16, 8, 4, 2, 1]);
});

test('pascalTriangle', () => {
    expect(pascalTriangle(3)).toEqual([[1], [1, 1], [1, 2, 1]]);
});
