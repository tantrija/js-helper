export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function toUpperCase(str: string): string {
    return str.toUpperCase();
}

export function toLowerCase(str: string): string {
    return str.toLowerCase();
}

export function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

export function repeatString(str: string, count: number): string {
    return str.repeat(count);
}

export function trim(str: string): string {
    return str.trim();
}

export function trimStart(str: string): string {
    return str.trimStart();
}

export function trimEnd(str: string): string {
    return str.trimEnd();
}

export function replace(str: string, search: string, replaceValue: string): string {
    return str.replace(search, replaceValue);
}

export function replaceAll(str: string, search: string, replaceValue: string): string {
    return str.split(search).join(replaceValue);
}
