export function equals(str1: string, str2: string): boolean {
    return str1 === str2;
}

export function equalsIgnoreCase(str1: string, str2: string): boolean {
    return str1.toLowerCase() === str2.toLowerCase();
}

export function compareLexicographically(str1: string, str2: string): number {
    return str1.localeCompare(str2);
}

export function startsWithAny(str: string, prefixes: string[]): boolean {
    return prefixes.some(prefix => str.startsWith(prefix));
}

export function endsWithAny(str: string, suffixes: string[]): boolean {
    return suffixes.some(suffix => str.endsWith(suffix));
}
