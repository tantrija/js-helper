export function toCamelCase(str: string): string {
    return str.replace(/([-_][a-z])/g, group => group.toUpperCase().replace(/[-_]/g, ''));
}

export function toPascalCase(str: string): string {
    return str
        .replace(/([-_][a-z])/g, group => group.toUpperCase().replace(/[-_]/g, ''))
        .replace(/^\w/, char => char.toUpperCase());
}

export function toSnakeCase(str: string): string {
    return str.replace(/([A-Z])/g, '_$1').toLowerCase().replace(/^_/, '');
}

export function toKebabCase(str: string): string {
    return str.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
}

export function swapCase(str: string): string {
    return str
        .split('')
        .map(char => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()))
        .join('');
}

export function toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
}

export function toSentenceCase(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function toSpongeCase(str: string): string {
    return str
        .split('')
        .map((char, index) => (index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()))
        .join('');
}
