export function padStart(str: string, targetLength: number, padChar: string = ' '): string {
    return str.padStart(targetLength, padChar);
}

export function padEnd(str: string, targetLength: number, padChar: string = ' '): string {
    return str.padEnd(targetLength, padChar);
}

export function truncate(str: string, maxLength: number): string {
    return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
}

export function slugify(str: string): string {
    return str
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+$/g, ''); // Remove trailing hyphens
}

export function escapeHtml(str: string): string {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

export function unescapeHtml(str: string): string {
    return str
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'");
}

export function insertAt(str: string, index: number, value: string): string {
    return str.slice(0, index) + value + str.slice(index);
}

export function removeAt(str: string, index: number, count: number): string {
    return str.slice(0, index) + str.slice(index + count);
}

export function wrap(str: string, prefix: string, suffix: string): string {
    return prefix + str + suffix;
}

export function unwrap(str: string, prefix: string, suffix: string): string {
    if (str.startsWith(prefix) && str.endsWith(suffix)) {
        return str.slice(prefix.length, str.length - suffix.length);
    }
    return str;
}
