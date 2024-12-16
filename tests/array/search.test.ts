import { findMax, findMin, indexOf, lastIndexOf, contains, findDuplicates } from '../../src/array/search';

describe('Search and Filter Utilities', () => {
    test('findMax finds the maximum value', () => {
        expect(findMax([1, 2, 3, 4])).toBe(4);
    });

    test('findMin finds the minimum value', () => {
        expect(findMin([1, 2, 3, 4])).toBe(1);
    });

    test('indexOf returns the first index of an element', () => {
        expect(indexOf([1, 2, 3, 4], 3)).toBe(2);
    });

    test('lastIndexOf returns the last index of an element', () => {
        expect(lastIndexOf([1, 2, 3, 4, 3], 3)).toBe(4);
    });

    test('contains checks if an element exists in the array', () => {
        expect(contains([1, 2, 3, 4], 3)).toBe(true);
        expect(contains([1, 2, 3, 4], 5)).toBe(false);
    });

    test('findDuplicates returns duplicate elements', () => {
        expect(findDuplicates([1, 2, 3, 2, 4, 4])).toEqual([2, 4]);
    });
});
