import * as validation from '../../src/object/validation';

test('hasKey should check for a key', () => {
    const obj = { a: 1 } as Record<string, any>; // Generalize the object type for the test
    expect(validation.hasKey(obj, 'a')).toBe(true);
    expect(validation.hasKey(obj, 'b')).toBe(false);
});

test('isEmptyObject should check if an object is empty', () => {
    expect(validation.isEmptyObject({})).toBe(true);
    expect(validation.isEmptyObject({ a: 1 })).toBe(false);
});

test('isDeepEqual should compare two objects deeply', () => {
    expect(validation.isDeepEqual({ a: 1 }, { a: 1 })).toBe(true);
    expect(validation.isDeepEqual({ a: 1 }, { b: 1 })).toBe(false);
});
