import { toBase64, fromBase64, customEncodeURIComponent, customDecodeURIComponent, escapeRegex, encodeHex, decodeHex } from '../../src/string/encode';

describe('Encoding Utilities', () => {
    test('toBase64', () => {
        expect(toBase64('hello')).toBe('aGVsbG8=');
    });

    test('fromBase64', () => {
        expect(fromBase64('aGVsbG8=')).toBe('hello');
    });

    test('customEncodeURIComponent', () => {
        expect(customEncodeURIComponent('hello world')).toBe('hello%20world');
        expect(customEncodeURIComponent('a+b=c')).toBe('a%2Bb%3Dc');
    });

    test('decodeURIComponent', () => {
        expect(customDecodeURIComponent('hello%20world')).toBe('hello world');
        expect(customDecodeURIComponent('a%2Bb%3Dc')).toBe('a+b=c');
    });

    test('escapeRegex', () => {
        expect(escapeRegex('[hello]')).toBe('\\[hello\\]');
    });

    test('encodeHex', () => {
        expect(encodeHex('hello')).toBe('68656c6c6f');
    });

    test('decodeHex', () => {
        expect(decodeHex('68656c6c6f')).toBe('hello');
    });
});
