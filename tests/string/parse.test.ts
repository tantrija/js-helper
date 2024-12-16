import { parseIntSafe, parseFloatSafe, toCharArray, reverseWords, extractNumbers, extractEmails, extractUrls } from '../../src/string/parse';

describe('Parsing Utilities', () => {
    test('parseIntSafe', () => {
        expect(parseIntSafe('123')).toBe(123);
        expect(parseIntSafe('abc')).toBe(null);
    });

    test('parseFloatSafe', () => {
        expect(parseFloatSafe('123.45')).toBe(123.45);
        expect(parseFloatSafe('abc')).toBe(null);
    });

    test('toCharArray', () => {
        expect(toCharArray('hello')).toEqual(['h', 'e', 'l', 'l', 'o']);
    });

    test('reverseWords', () => {
        expect(reverseWords('hello world')).toBe('world hello');
    });

    test('extractNumbers', () => {
        expect(extractNumbers('a1b2c3')).toEqual([1, 2, 3]);
    });

    test('extractEmails', () => {
        expect(extractEmails('test@example.com hello@example.org')).toEqual(['test@example.com', 'hello@example.org']);
    });

    test('extractUrls', () => {
        expect(extractUrls('Visit https://example.com')).toEqual(['https://example.com']);
    });
});
