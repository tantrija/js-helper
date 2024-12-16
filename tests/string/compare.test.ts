import { equals, equalsIgnoreCase, compareLexicographically, startsWithAny, endsWithAny } from '../../src/string/compare';

describe('Comparison Utilities', () => {
    test('equals', () => {
        expect(equals('hello', 'hello')).toBe(true);
        expect(equals('hello', 'world')).toBe(false);
    });

    test('equalsIgnoreCase', () => {
        expect(equalsIgnoreCase('hello', 'HELLO')).toBe(true);
    });

    test('compareLexicographically', () => {
        expect(compareLexicographically('abc', 'xyz')).toBeLessThan(0);
        expect(compareLexicographically('xyz', 'abc')).toBeGreaterThan(0);
        expect(compareLexicographically('abc', 'abc')).toBe(0);
    });

    test('startsWithAny', () => {
        expect(startsWithAny('hello', ['he', 'wo'])).toBe(true);
        expect(startsWithAny('world', ['he', 'wo'])).toBe(true);
    });

    test('endsWithAny', () => {
        expect(endsWithAny('hello', ['lo', 'he'])).toBe(true);
    });
});
