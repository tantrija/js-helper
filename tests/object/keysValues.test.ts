import * as keysValues from '../../src/object/keysValues';

test('getObjectKeys should return keys', () => {
    expect(keysValues.getObjectKeys({ a: 1, b: 2 })).toEqual(['a', 'b']);
});

test('getObjectValues should return values', () => {
    expect(keysValues.getObjectValues({ a: 1, b: 2 })).toEqual([1, 2]);
});

test('invertObject should swap keys and values', () => {
    expect(keysValues.invertObject({ a: 1, b: 2 })).toEqual({ 1: 'a', 2: 'b' });
});

test('filterKeys should filter by key predicate', () => {
    expect(keysValues.filterKeys({ a: 1, b: 2 }, (key) => key === 'a')).toEqual({ a: 1 });
});

test('mapKeys should map keys', () => {
    expect(keysValues.mapKeys({ a: 1, b: 2 }, (key) => `x_${key}`)).toEqual({ x_a: 1, x_b: 2 });
});

test('mapValues should map values', () => {
    expect(keysValues.mapValues({ a: 1, b: 2 }, (value) => value * 2)).toEqual({ a: 2, b: 4 });
});
