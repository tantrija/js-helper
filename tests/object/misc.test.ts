import * as misc from '../../src/object/misc';

test('objectSize should return the number of keys in an object', () => {
    expect(misc.objectSize({ a: 1, b: 2 })).toBe(2);
    expect(misc.objectSize({})).toBe(0);
});

test('freezeDeep should deeply freeze an object', () => {
    const obj = { a: { b: { c: 1 } } };
    misc.freezeDeep(obj);
    expect(Object.isFrozen(obj)).toBe(true);
    expect(Object.isFrozen(obj.a)).toBe(true);
    expect(Object.isFrozen(obj.a.b)).toBe(true);
});

test('camelCaseKeys should convert keys to camelCase', () => {
    const obj = { 'my_key': 1, 'another_key': 2 };
    const result = misc.camelCaseKeys(obj);
    expect(result).toEqual({ myKey: 1, anotherKey: 2 });
});

test('snakeCaseKeys should convert keys to snake_case', () => {
    const obj = { myKey: 1, anotherKey: 2 };
    const result = misc.snakeCaseKeys(obj);
    expect(result).toEqual({ my_key: 1, another_key: 2 });
});

test('kebabCaseKeys should convert keys to kebab-case', () => {
    const obj = { myKey: 1, anotherKey: 2 };
    const result = misc.kebabCaseKeys(obj);
    expect(result).toEqual({ 'my-key': 1, 'another-key': 2 });
});

test('toJSONString should convert object to JSON string', () => {
    const obj = { a: 1, b: 2 };
    expect(misc.toJSONString(obj)).toBe('{\n  "a": 1,\n  "b": 2\n}');
});

test('fromJSONString should parse JSON string to object', () => {
    const json = '{"a":1,"b":2}';
    expect(misc.fromJSONString(json)).toEqual({ a: 1, b: 2 });
});

test('countByValue should return value frequencies in an object', () => {
    const obj = { a: 1, b: 2, c: 1 };
    expect(misc.countByValue(obj)).toEqual({ '1': 2, '2': 1 });
});
