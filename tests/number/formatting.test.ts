import { formatCurrency, toExponential, addCommas, toRoman, fromRoman } from '../../src/number/formatting';

test('formatCurrency', () => {
    expect(formatCurrency(1234.56)).toBe('$1,234.56');
    expect(formatCurrency(1234.56, '€')).toBe('€1,234.56');
});

test('toExponential', () => {
    expect(toExponential(12345, 2)).toBe('1.23e+4');
});

test('addCommas', () => {
    expect(addCommas(1000000)).toBe('1,000,000');
});

test('toRoman', () => {
    expect(toRoman(1)).toBe('I');
    expect(toRoman(4)).toBe('IV');
    expect(toRoman(3999)).toBe('MMMCMXCIX');
});

test('fromRoman', () => {
    expect(fromRoman('I')).toBe(1);
    expect(fromRoman('IV')).toBe(4);
    expect(fromRoman('MMMCMXCIX')).toBe(3999);
});
