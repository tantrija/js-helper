import { isEmpty, isArray, hasDuplicates, isSortedAscending, isSortedDescending } from '../../src/array/validation';

describe('Validation Utilities', () => {
    test('isEmpty checks if the array is empty', () => {
        expect(isEmpty([])).toBe(true);
        expect(isEmpty([1, 2, 3])).toBe(false);
    });

    test('isArray checks if a variable is an array', () => {
        expect(isArray([1, 2, 3])).toBe(true);
        expect(isArray('not an array')).toBe(false);
    });

    test('hasDuplicates checks for duplicate elements', () => {
        expect(hasDuplicates([1, 2, 3, 2])).toBe(true);
        expect(hasDuplicates([1, 2, 3])).toBe(false);
    });

    test('isSortedAscending checks if an array is sorted in ascending order', () => {
        expect(isSortedAscending([1, 2, 3, 4])).toBe(true);
        expect(isSortedAscending([1, 3, 2])).toBe(false);
    });

    test('isSortedDescending checks if an array is sorted in descending order', () => {
        expect(isSortedDescending([4, 3, 2, 1])).toBe(true);
        expect(isSortedDescending([4, 2, 3])).toBe(false);
    });
});
