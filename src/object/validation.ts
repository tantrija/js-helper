/* eslint-disable  @typescript-eslint/no-explicit-any */

export function hasKey<T extends object>(obj: T, key: string | number | symbol): boolean {
    return key in obj;
}

export function isEmptyObject(obj: object): boolean {
    return Object.keys(obj).length === 0;
}

export function isDeepEqual(obj1: any, obj2: any): boolean { // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

export function hasNestedKey(obj: any, keyPath: string[]): boolean { // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    return keyPath.reduce((acc, key) => (acc && acc[key] ? acc[key] : undefined), obj) !== undefined;
}

export function isObject(value: any): boolean { // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}

export function isFrozen(obj: object): boolean {
    return Object.isFrozen(obj);
}

export function isSealed(obj: object): boolean {
    return Object.isSealed(obj);
}
