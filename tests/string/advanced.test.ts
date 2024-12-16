import { hashString, generateRandomString, obfuscateEmail, formatCurrency, splitByRegex, maskString, removeDuplicateWords } from '../../src/string/advanced';

describe('Advanced Utilities', () => {
    test('hashString', () => {
        expect(hashString('hello', 'md5')).toBeDefined();
    });

    test('generateRandomString', () => {
        expect(generateRandomString(10)).toHaveLength(10);
    });

    test('obfuscateEmail', () => {
        expect(obfuscateEmail('test@example.com')).toBe('t***t@example.com');
    });

    test('formatCurrency', () => {
        expect(formatCurrency(1234.56)).toBe('$1,234.56');
    });

    test('splitByRegex', () => {
        expect(splitByRegex('hello123world', /\d+/)).toEqual(['hello', 'world']);
    });

    test('maskString', () => {
        expect(maskString('123456789', 2, 6)).toBe('12****789');
    });

    test('removeDuplicateWords', () => {
        expect(removeDuplicateWords('hello hello world')).toBe('hello world');
    });
});
