import { joinWithDelimiter, findLongestString, toLowerCaseArray, sortAlphabetically } from '../../src/array/stringArrays';

describe('String-Specific Array Utilities', () => {
    test('joinWithDelimiter joins strings with a delimiter', () => {
        expect(joinWithDelimiter(['a', 'b', 'c'], ',')).toBe('a,b,c');
    });

    test('findLongestString finds the longest string', () => {
        expect(findLongestString(['short', 'longest', 'tiny'])).toBe('longest');
    });

    test('toLowerCaseArray converts strings to lowercase', () => {
        expect(toLowerCaseArray(['A', 'B', 'C'])).toEqual(['a', 'b', 'c']);
    });

    test('sortAlphabetically sorts strings alphabetically', () => {
        expect(sortAlphabetically(['banana', 'apple', 'cherry'])).toEqual(['apple', 'banana', 'cherry']);
    });
});
