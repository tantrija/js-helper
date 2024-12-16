import { toBinary, toHex, toOctal, fromBinary, fromHex, fromOctal } from '../../src/number/conversions';

test('toBinary', () => {
    expect(toBinary(10)).toBe('1010');
    expect(toBinary(255)).toBe('11111111');
});

test('toHex', () => {
    expect(toHex(255)).toBe('ff');
    expect(toHex(16)).toBe('10');
});

test('toOctal', () => {
    expect(toOctal(8)).toBe('10');
    expect(toOctal(64)).toBe('100');
});

test('fromBinary', () => {
    expect(fromBinary('1010')).toBe(10);
    expect(fromBinary('11111111')).toBe(255);
});

test('fromHex', () => {
    expect(fromHex('ff')).toBe(255);
    expect(fromHex('10')).toBe(16);
});

test('fromOctal', () => {
    expect(fromOctal('10')).toBe(8);
    expect(fromOctal('100')).toBe(64);
});
