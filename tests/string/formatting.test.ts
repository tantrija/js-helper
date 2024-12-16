import { padStart, padEnd, truncate, slugify, escapeHtml, unescapeHtml, insertAt, removeAt, wrap, unwrap } from '../../src/string/formatting';

describe('Formatting Utilities', () => {
    test('padStart', () => {
        expect(padStart('5', 3, '0')).toBe('005');
        expect(padStart('hello', 10)).toBe('     hello');
    });

    test('padEnd', () => {
        expect(padEnd('5', 3, '0')).toBe('500');
        expect(padEnd('hello', 10)).toBe('hello     ');
    });

    test('truncate', () => {
        expect(truncate('hello world', 5)).toBe('hello...');
        expect(truncate('short', 10)).toBe('short');
    });

    test('slugify', () => {
        expect(slugify('Hello World!')).toBe('hello-world');
        expect(slugify('Special Characters @#')).toBe('special-characters');
        expect(slugify('  Ends with space  ')).toBe('ends-with-space');
    });


    test('escapeHtml', () => {
        expect(escapeHtml('<div>"hello"</div>')).toBe('&lt;div&gt;&quot;hello&quot;&lt;/div&gt;');
    });

    test('unescapeHtml', () => {
        expect(unescapeHtml('&lt;div&gt;&quot;hello&quot;&lt;/div&gt;')).toBe('<div>"hello"</div>');
    });

    test('insertAt', () => {
        expect(insertAt('hello', 3, 'X')).toBe('helXlo');
    });

    test('removeAt', () => {
        expect(removeAt('hello', 1, 3)).toBe('ho');
    });

    test('wrap', () => {
        expect(wrap('hello', '(', ')')).toBe('(hello)');
    });

    test('unwrap', () => {
        expect(unwrap('(hello)', '(', ')')).toBe('hello');
    });
});
