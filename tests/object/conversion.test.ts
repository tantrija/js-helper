import * as conversion from '../../src/object/conversion';

test('toObject should convert entries to object', () => {
    expect(conversion.toObject([['a', 1], ['b', 2]])).toEqual({ a: 1, b: 2 });
});

test('fromEntries should convert entries to object', () => {
    expect(conversion.fromEntries([['a', 1], ['b', 2]])).toEqual({ a: 1, b: 2 });
});

test('objectToQueryString should convert object to query string', () => {
    expect(conversion.objectToQueryString({ a: 1, b: 2 })).toBe('a=1&b=2');
});

test('queryStringToObject should convert query string to object', () => {
    expect(conversion.queryStringToObject('?a=1&b=2')).toEqual({ a: '1', b: '2' });
});
