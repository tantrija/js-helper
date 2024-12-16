import { contains, startsWith, endsWith, isEmpty, isPalindrome, countOccurrences, indexOf, lastIndexOf, matchesPattern, isAlpha, isNumeric, isAlphaNumeric } from '../../src/string/search';

describe('Search and Validation', () => {
    test('contains', () => {
        expect(contains('hello world', 'world')).toBe(true);
        expect(contains('hello world', 'planet')).toBe(false);
    });

    test('startsWith', () => {
        expect(startsWith('hello', 'he')).toBe(true);
        expect(startsWith('hello', 'wo')).toBe(false);
    });

    test('endsWith', () => {
        expect(endsWith('hello', 'lo')).toBe(true);
        expect(endsWith('hello', 'he')).toBe(false);
    });

    test('isEmpty', () => {
        expect(isEmpty('')).toBe(true);
        expect(isEmpty(' ')).toBe(true);
        expect(isEmpty('hello')).toBe(false);
    });

    test('isPalindrome', () => {
        expect(isPalindrome('racecar')).toBe(true);
        expect(isPalindrome('hello')).toBe(false);
    });

    test('countOccurrences', () => {
        expect(countOccurrences('hello world', 'l')).toBe(3);
    });

    test('indexOf', () => {
        expect(indexOf('hello', 'l')).toBe(2);
    });

    test('lastIndexOf', () => {
        expect(lastIndexOf('hello', 'l')).toBe(3);
    });

    test('matchesPattern', () => {
        expect(matchesPattern('12345', /^\d+$/)).toBe(true);
        expect(matchesPattern('hello', /^\d+$/)).toBe(false);
    });

    test('isAlpha', () => {
        expect(isAlpha('hello')).toBe(true);
        expect(isAlpha('123')).toBe(false);
    });

    test('isNumeric', () => {
        expect(isNumeric('123')).toBe(true);
        expect(isNumeric('hello')).toBe(false);
    });

    test('isAlphaNumeric', () => {
        expect(isAlphaNumeric('hello123')).toBe(true);
        expect(isAlphaNumeric('hello!')).toBe(false);
    });
});
