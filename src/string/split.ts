export function splitByDelimiter(str: string, delimiter: string): string[] {
    return str.split(delimiter);
}

export function splitByLength(str: string, length: number): string[] {
    const result: string[] = [];
    for (let i = 0; i < str.length; i += length) {
        result.push(str.slice(i, i + length));
    }
    return result;
}

export function joinWithDelimiter(parts: string[], delimiter: string): string {
    return parts.join(delimiter);
}

export function getWords(str: string): string[] {
    return str.trim().split(/\s+/);
}

export function countWords(str: string): number {
    return getWords(str).length;
}
