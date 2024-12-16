export function contains(str: string, substring: string): boolean {
    return str.includes(substring);
}

export function startsWith(str: string, prefix: string): boolean {
    return str.startsWith(prefix);
}

export function endsWith(str: string, suffix: string): boolean {
    return str.endsWith(suffix);
}

export function isEmpty(str: string): boolean {
    return str.trim().length === 0;
}

export function isPalindrome(str: string): boolean {
    const cleaned = str.replace(/[\W_]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}

export function countOccurrences(str: string, char: string): number {
    return (str.match(new RegExp(char, 'g')) || []).length;
}

export function indexOf(str: string, searchValue: string): number {
    return str.indexOf(searchValue);
}

export function lastIndexOf(str: string, searchValue: string): number {
    return str.lastIndexOf(searchValue);
}

export function matchesPattern(str: string, pattern: RegExp): boolean {
    return pattern.test(str);
}

export function isAlpha(str: string): boolean {
    return /^[A-Za-z]+$/.test(str);
}

export function isNumeric(str: string): boolean {
    return /^[0-9]+$/.test(str);
}

export function isAlphaNumeric(str: string): boolean {
    return /^[A-Za-z0-9]+$/.test(str);
}
