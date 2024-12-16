export function parseIntSafe(str: string): number | null {
    const parsed = parseInt(str, 10);
    return isNaN(parsed) ? null : parsed;
}

export function parseFloatSafe(str: string): number | null {
    const parsed = parseFloat(str);
    return isNaN(parsed) ? null : parsed;
}

export function toCharArray(str: string): string[] {
    return str.split('');
}

export function reverseWords(str: string): string {
    return str.split(' ').reverse().join(' ');
}

export function extractNumbers(str: string): number[] {
    const matches = str.match(/\d+/g);
    return matches ? matches.map(Number) : [];
}

export function extractEmails(str: string): string[] {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    return str.match(emailRegex) || [];
}

export function extractUrls(str: string): string[] {
    const urlRegex = /https?:\/\/[^\s]+/g;
    return str.match(urlRegex) || [];
}
