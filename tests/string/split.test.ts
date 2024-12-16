import { splitByDelimiter, splitByLength, joinWithDelimiter, getWords, countWords } from '../../src/string/split';

describe('Splitting and Joining Utilities', () => {
    test('splitByDelimiter', () => {
        expect(splitByDelimiter('a,b,c', ',')).toEqual(['a', 'b', 'c']);
    });

    test('splitByLength', () => {
        expect(splitByLength('abcdef', 2)).toEqual(['ab', 'cd', 'ef']);
    });

    test('joinWithDelimiter', () => {
        expect(joinWithDelimiter(['a', 'b', 'c'], ',')).toBe('a,b,c');
    });

    test('getWords', () => {
        expect(getWords('hello world')).toEqual(['hello', 'world']);
    });

    test('countWords', () => {
        expect(countWords('hello world')).toBe(2);
    });
});
