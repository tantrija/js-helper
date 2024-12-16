import { removeWhitespace, removeNonAlphaNumeric, normalizeDiacritics, stripHtmlTags, collapseWhitespace, removePunctuation } from '../../src/string/clean';

describe('Cleaning Utilities', () => {
    test('removeWhitespace', () => {
        expect(removeWhitespace(' h e l l o ')).toBe('hello');
    });

    test('removeNonAlphaNumeric', () => {
        expect(removeNonAlphaNumeric('hello@123')).toBe('hello123');
    });

    test('normalizeDiacritics', () => {
        expect(normalizeDiacritics('café')).toBe('cafe');
    });

    test('stripHtmlTags', () => {
        expect(stripHtmlTags('<div>hello</div>')).toBe('hello');
    });

    test('collapseWhitespace', () => {
        expect(collapseWhitespace('  hello   world  ')).toBe('hello world');
    });

    test('removePunctuation', () => {
        expect(removePunctuation('hello, world!')).toBe('hello world');
    });
});
