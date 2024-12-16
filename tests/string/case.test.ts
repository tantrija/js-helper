import { toCamelCase, toPascalCase, toSnakeCase, toKebabCase, swapCase, toTitleCase, toSentenceCase, toSpongeCase } from '../../src/string/case';

describe('Case Transformations', () => {
    test('toCamelCase', () => {
        expect(toCamelCase('hello_world')).toBe('helloWorld');
    });

    test('toPascalCase', () => {
        expect(toPascalCase('hello_world')).toBe('HelloWorld');
    });

    test('toSnakeCase', () => {
        expect(toSnakeCase('helloWorld')).toBe('hello_world');
    });

    test('toKebabCase', () => {
        expect(toKebabCase('helloWorld')).toBe('hello-world');
    });

    test('swapCase', () => {
        expect(swapCase('Hello')).toBe('hELLO');
    });

    test('toTitleCase', () => {
        expect(toTitleCase('hello world')).toBe('Hello World');
    });

    test('toSentenceCase', () => {
        expect(toSentenceCase('hello world')).toBe('Hello world');
    });

    test('toSpongeCase', () => {
        expect(toSpongeCase('hello')).toBe('HeLlO');
    });
});
