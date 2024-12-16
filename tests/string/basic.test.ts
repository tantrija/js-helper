import { capitalize, toUpperCase, toLowerCase, reverseString, repeatString, trim, trimStart, trimEnd, replace, replaceAll } from '../../src/string/basic';

describe('Basic String Utilities', () => {
    test('capitalize', () => {
        expect(capitalize('hello')).toBe('Hello');
        expect(capitalize('WORLD')).toBe('World');
    });

    test('toUpperCase', () => {
        expect(toUpperCase('hello')).toBe('HELLO');
    });

    test('toLowerCase', () => {
        expect(toLowerCase('WORLD')).toBe('world');
    });

    test('reverseString', () => {
        expect(reverseString('hello')).toBe('olleh');
    });

    test('repeatString', () => {
        expect(repeatString('abc', 3)).toBe('abcabcabc');
    });

    test('trim', () => {
        expect(trim('  hello  ')).toBe('hello');
    });

    test('trimStart', () => {
        expect(trimStart('  hello')).toBe('hello');
    });

    test('trimEnd', () => {
        expect(trimEnd('hello  ')).toBe('hello');
    });

    test('replace', () => {
        expect(replace('hello world', 'world', 'there')).toBe('hello there');
    });

    test('replaceAll', () => {
        expect(replaceAll('ababab', 'ab', 'cd')).toBe('cdcdcd');
    });
});
