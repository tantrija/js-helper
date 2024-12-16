import { arrayToObject, objectToKeys, keyBy } from '../../src/array/toObject';

describe('Array-to-Object Utilities', () => {
    test('arrayToObject converts an array into an object using a key function', () => {
        const array = ['a', 'b', 'c'];
        expect(arrayToObject(array, (item) => item)).toEqual({
            a: 'a',
            b: 'b',
            c: 'c',
        });
    });

    test('objectToKeys extracts keys from an object', () => {
        expect(objectToKeys({ a: 1, b: 2, c: 3 })).toEqual(['a', 'b', 'c']);
    });

    test('keyBy converts an array of objects into an object keyed by a property', () => {
        const data = [{ id: 'a', value: 1 }, { id: 'b', value: 2 }];
        expect(keyBy(data, (item) => item.id)).toEqual({
            a: { id: 'a', value: 1 },
            b: { id: 'b', value: 2 },
        });
    });
});
