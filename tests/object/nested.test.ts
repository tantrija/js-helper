import * as nested from '../../src/object/nested';

test('getNestedValue should get value by key path', () => {
    const obj = { a: { b: { c: 42 } } };
    expect(nested.getNestedValue(obj, ['a', 'b', 'c'])).toBe(42);
});

test('setNestedValue should set value by key path', () => {
    const obj: any = {};
    nested.setNestedValue(obj, ['a', 'b', 'c'], 42);
    expect(obj).toEqual({ a: { b: { c: 42 } } });
});

test('deleteNestedKey should delete key by path', () => {
    const obj = { a: { b: { c: 42 } } };
    nested.deleteNestedKey(obj, ['a', 'b', 'c']);
    expect(obj).toEqual({ a: { b: {} } });
});

test('flattenObject should flatten nested objects', () => {
    const obj = { a: { b: { c: 42 } }, d: 3 };
    expect(nested.flattenObject(obj)).toEqual({ 'a.b.c': 42, d: 3 });
});

test('unflattenObject should convert flat object to nested', () => {
    const obj = { 'a.b.c': 42, d: 3 };
    expect(nested.unflattenObject(obj)).toEqual({ a: { b: { c: 42 } }, d: 3 });
});
