import { findMaxIndex, sortAscending, normalizeValues } from '../../src/array/numericArrays';

describe('Numeric Array Utilities', () => {
    test('findMaxIndex finds the index of the maximum value', () => {
        expect(findMaxIndex([1, 2, 3, 2])).toBe(2);
    });

    test('sortAscending sorts numbers in ascending order', () => {
        expect(sortAscending([3, 1, 2])).toEqual([1, 2, 3]);
    });

    test('normalizeValues normalizes values to a range of 0-1', () => {
        expect(normalizeValues([10, 20, 30])).toEqual([0, 0.5, 1]);
    });
});
