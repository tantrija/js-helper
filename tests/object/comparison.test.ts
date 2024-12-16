import * as comparison from '../../src/object/comparison';

test('getMatchingKeys should find common keys', () => {
    expect(comparison.getMatchingKeys({ a: 1, b: 2 }, { b: 3, c: 4 })).toEqual(['b']);
});

test('objectDiff should find differences between objects', () => {
    expect(comparison.objectDiff({ a: 1, b: 2 }, { a: 1, c: 3 })).toEqual({ b: 2 });
});

test('shallowEqual should check shallow equality', () => {
    expect(comparison.shallowEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
    expect(comparison.shallowEqual({ a: 1 }, { a: 2 })).toBe(false);
});
