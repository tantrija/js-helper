export function charAt(str: string, index: number): string {
    return str.charAt(index);
}

export function charCodeAt(str: string, index: number): number {
    return str.charCodeAt(index);
}

export function fromCharCode(code: number): string {
    return String.fromCharCode(code);
}

export function getUniqueCharacters(str: string): string[] {
    return Array.from(new Set(str.split('')));
}

export function isUpperCase(str: string): boolean {
    return str === str.toUpperCase();
}

export function isLowerCase(str: string): boolean {
    return str === str.toLowerCase();
}
