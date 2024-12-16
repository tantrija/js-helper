import { append, prepend, insertAt, removeAt, replaceAt, flatten, deepFlatten } from '../../src/array/basic';

describe('Basic Array Utilities', () => {
    test('append adds an element to the end', () => {
        expect(append([1, 2, 3], 4)).toEqual([1, 2, 3, 4]);
    });

    test('prepend adds an element to the beginning', () => {
        expect(prepend([2, 3, 4], 1)).toEqual([1, 2, 3, 4]);
    });

    test('insertAt inserts an element at a specific index', () => {
        expect(insertAt([1, 2, 4], 2, 3)).toEqual([1, 2, 3, 4]);
    });

    test('removeAt removes an element at a specific index', () => {
        expect(removeAt([1, 2, 3, 4], 2)).toEqual([1, 2, 4]);
    });

    test('replaceAt replaces an element at a specific index', () => {
        expect(replaceAt([1, 2, 3], 1, 9)).toEqual([1, 9, 3]);
    });

    test('flatten flattens a 2D array into a 1D array', () => {
        expect(flatten([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4]);
    });

    test('deepFlatten recursively flattens a deeply nested array', () => {
        expect(deepFlatten([1, [2, [3, 4], 5]])).toEqual([1, 2, 3, 4, 5]);
    });
});
