/* eslint-disable  @typescript-eslint/no-explicit-any */

export function isEmpty<T>(array: T[]): boolean {
    return array.length === 0;
}

export function isArray(value: any): boolean {
    return Array.isArray(value);
}

export function hasDuplicates<T>(array: T[]): boolean {
    return new Set(array).size !== array.length;
}

export function isEqual<T>(array1: T[], array2: T[]): boolean {
    if (array1.length !== array2.length) return false;
    return array1.every((value, index) => value === array2[index]);
}

export function isSortedAscending(array: number[]): boolean {
    return array.every((value, index) => index === 0 || value >= array[index - 1]);
}

export function isSortedDescending(array: number[]): boolean {
    return array.every((value, index) => index === 0 || value <= array[index - 1]);
}

export function hasSubset<T>(array: T[], subset: T[]): boolean {
    return subset.every((value) => array.includes(value));
}
