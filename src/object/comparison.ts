/* eslint-disable  @typescript-eslint/no-explicit-any */

export function getMatchingKeys<T extends object, U extends object>(obj1: T, obj2: U): (keyof T & keyof U)[] {
    return Object.keys(obj1).filter((key) => key in obj2) as (keyof T & keyof U)[];
}

export function getMatchingValues<T extends object, U extends object>(obj1: T, obj2: U): Partial<T & U> {
    return Object.fromEntries(
        Object.entries(obj1).filter(([key, value]) => obj2[key as keyof U] === value)
    ) as Partial<T & U>;
}

export function objectDiff<T extends object, U extends object>(obj1: T, obj2: U): Partial<T | U> {
    return Object.fromEntries(
        Object.entries(obj1).filter(([key, value]) => obj2[key as keyof U] !== value)
    ) as Partial<T | U>;
}

export function shallowEqual<T extends object>(obj1: T, obj2: T): boolean {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
    return Object.entries(obj1).every(([key, value]) => obj2[key as keyof T] === value);
}

export function deepCompare(obj1: any, obj2: any): boolean {
    if (obj1 === obj2) return true;
    if (typeof obj1 !== typeof obj2 || typeof obj1 !== 'object') return false;

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;

    return keys1.every((key) => deepCompare(obj1[key], obj2[key]));
}
