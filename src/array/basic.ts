export function append<T>(array: T[], element: T): T[] {
    return [...array, element];
}

export function prepend<T>(array: T[], element: T): T[] {
    return [element, ...array];
}

export function insertAt<T>(array: T[], index: number, element: T): T[] {
    return [...array.slice(0, index), element, ...array.slice(index)];
}

export function removeAt<T>(array: T[], index: number): T[] {
    return [...array.slice(0, index), ...array.slice(index + 1)];
}

export function replaceAt<T>(array: T[], index: number, element: T): T[] {
    return [...array.slice(0, index), element, ...array.slice(index + 1)];
}

export function removeDuplicates<T>(array: T[]): T[] {
    return Array.from(new Set(array));
}

export function flatten<T>(array: T[][]): T[] {
    return array.reduce((acc, val) => acc.concat(val), []);
}

export function deepFlatten(array: any[]): any[] {
    return array.reduce(
        (acc, val) => acc.concat(Array.isArray(val) ? deepFlatten(val) : val),
        []
    );
}

export function reverseArray<T>(array: T[]): T[] {
    return [...array].reverse();
}

export function splitArray<T>(array: T[], size: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}
