export function toBase64(str: string): string {
    return Buffer.from(str).toString('base64');
}

export function fromBase64(base64: string): string {
    return Buffer.from(base64, 'base64').toString('utf-8');
}

export function customEncodeURIComponent(str: string): string {
    return encodeURIComponent(str);
}

export function customDecodeURIComponent(encoded: string): string {
    return decodeURIComponent(encoded);
}

export function escapeRegex(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function encodeHex(str: string): string {
    return Buffer.from(str, 'utf-8').toString('hex');
}

export function decodeHex(hex: string): string {
    return Buffer.from(hex, 'hex').toString('utf-8');
}
