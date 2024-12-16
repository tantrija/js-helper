import * as basic from '../../src/object/basic';

test('mergeObjects should merge two objects', () => {
    expect(basic.mergeObjects({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
});

test('cloneObject should deeply clone an object', () => {
    const obj = { a: { b: 1 } };
    const clone = basic.cloneObject(obj);
    expect(clone).toEqual(obj);
    expect(clone).not.toBe(obj);
});

test('shallowClone should create a shallow copy', () => {
    const obj = { a: { b: 1 } };
    const clone = basic.shallowClone(obj);
    expect(clone).toEqual(obj);
    expect(clone.a).toBe(obj.a);
});

test('freezeObject should freeze an object', () => {
    const obj = { a: 1 };
    const frozen = basic.freezeObject(obj);
    expect(Object.isFrozen(frozen)).toBe(true);
});

test('omitKeys should remove specified keys', () => {
    expect(basic.omitKeys({ a: 1, b: 2, c: 3 }, ['a', 'c'])).toEqual({ b: 2 });
});

test('pickKeys should pick specified keys', () => {
    expect(basic.pickKeys({ a: 1, b: 2, c: 3 }, ['a', 'c'])).toEqual({ a: 1, c: 3 });
});

test('renameKeys should rename keys according to mapping', () => {
    expect(basic.renameKeys({ a: 1, b: 2 }, { a: 'x', b: 'y' })).toEqual({ x: 1, y: 2 });
});

test('removeUndefined should remove undefined values', () => {
    expect(basic.removeUndefined({ a: 1, b: undefined, c: 3 })).toEqual({ a: 1, c: 3 });
});
