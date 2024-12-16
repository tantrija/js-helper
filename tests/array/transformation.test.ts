import { groupBy, partition, zip, unzip, pluck } from '../../src/array/transformation';

describe('Transformation Utilities', () => {
    test('groupBy groups elements by a key function', () => {
        const data = [{ age: 20 }, { age: 30 }, { age: 20 }];
        expect(groupBy(data, (item) => item.age.toString())).toEqual({
            '20': [{ age: 20 }, { age: 20 }],
            '30': [{ age: 30 }],
        });
    });

    test('partition splits an array into two based on a condition', () => {
        const isEven = (num: number) => num % 2 === 0;
        expect(partition([1, 2, 3, 4], isEven)).toEqual([[2, 4], [1, 3]]);
    });

    test('zip combines two arrays into pairs', () => {
        expect(zip([1, 2, 3], ['a', 'b', 'c'])).toEqual([
            [1, 'a'],
            [2, 'b'],
            [3, 'c'],
        ]);
    });

    test('unzip splits an array of pairs into separate arrays', () => {
        expect(unzip([[1, 'a'], [2, 'b'], [3, 'c']])).toEqual([
            [1, 2, 3],
            ['a', 'b', 'c'],
        ]);
    });

    test('pluck extracts a property from an array of objects', () => {
        const data = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];
        expect(pluck(data, 'name')).toEqual(['Alice', 'Bob', 'Charlie']);
    });
});
