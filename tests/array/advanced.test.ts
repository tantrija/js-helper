import { flattenToDepth, mergeSortedArrays, binarySearch, generateRange, permutations } from '../../src/array/advanced';

describe('Advanced Utilities', () => {
    test('flattenToDepth flattens to a specified depth', () => {
        expect(flattenToDepth([1, [2, [3, [4]]]], 2)).toEqual([1, 2, 3, [4]]);
    });

    test('mergeSortedArrays merges and sorts two arrays', () => {
        expect(mergeSortedArrays([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('binarySearch finds the index of a target value', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
        expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
    });

    test('generateRange generates a range of numbers', () => {
        expect(generateRange(1, 5)).toEqual([1, 2, 3, 4, 5]);
        expect(generateRange(0, 10, 2)).toEqual([0, 2, 4, 6, 8, 10]);
    });

    test('permutations generates all permutations of an array', () => {
        expect(permutations([1, 2])).toEqual([[1, 2], [2, 1]]);
    });
});
