import crypto from 'crypto';

export function hashString(str: string, algorithm: 'md5' | 'sha256' = 'sha256'): string {
    return crypto.createHash(algorithm).update(str).digest('hex');
}

export function generateRandomString(length: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

export function obfuscateEmail(email: string): string {
    const [localPart, domain] = email.split('@');
    return localPart[0] + '***' + localPart.slice(-1) + '@' + domain;
}

export function formatCurrency(value: number, currency: string = 'USD'): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
    }).format(value);
}

export function splitByRegex(str: string, regex: RegExp): string[] {
    return str.split(regex);
}

export function maskString(str: string, start: number, end: number, maskChar: string = '*'): string {
    return (
        str.slice(0, start) +
        maskChar.repeat(Math.max(0, end - start)) +
        str.slice(end)
    );
}

export function removeDuplicateWords(str: string): string {
    const words = str.split(' ');
    return Array.from(new Set(words)).join(' ');
}
