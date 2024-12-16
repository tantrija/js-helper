export function joinWithDelimiter(array: string[], delimiter: string): string {
    return array.join(delimiter);
}

export function findLongestString(array: string[]): string | undefined {
    return array.reduce((longest, current) =>
        current.length > longest.length ? current : longest
        , '');
}

export function findShortestString(array: string[]): string | undefined {
    return array.reduce((shortest, current) =>
        current.length < shortest.length ? current : shortest
        , array[0] || '');
}

export function toLowerCaseArray(array: string[]): string[] {
    return array.map((str) => str.toLowerCase());
}

export function toUpperCaseArray(array: string[]): string[] {
    return array.map((str) => str.toUpperCase());
}

export function sortAlphabetically(array: string[]): string[] {
    return [...array].sort();
}

export function startsWith(array: string[], prefix: string): string[] {
    return array.filter((str) => str.startsWith(prefix));
}

export function endsWith(array: string[], suffix: string): string[] {
    return array.filter((str) => str.endsWith(suffix));
}

export function containsSubstring(array: string[], substring: string): string[] {
    return array.filter((str) => str.includes(substring));
}
