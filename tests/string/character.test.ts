import { charAt, charCodeAt, fromCharCode, getUniqueCharacters, isUpperCase, isLowerCase } from '../../src/string/character';

describe('Character Analysis Utilities', () => {
    test('charAt', () => {
        expect(charAt('hello', 1)).toBe('e');
    });

    test('charCodeAt', () => {
        expect(charCodeAt('A', 0)).toBe(65);
    });

    test('fromCharCode', () => {
        expect(fromCharCode(65)).toBe('A');
    });

    test('getUniqueCharacters', () => {
        expect(getUniqueCharacters('hello')).toEqual(['h', 'e', 'l', 'o']);
    });

    test('isUpperCase', () => {
        expect(isUpperCase('HELLO')).toBe(true);
        expect(isUpperCase('Hello')).toBe(false);
    });

    test('isLowerCase', () => {
        expect(isLowerCase('hello')).toBe(true);
        expect(isLowerCase('Hello')).toBe(false);
    });
});
