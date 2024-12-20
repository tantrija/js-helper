/* eslint-disable  @typescript-eslint/no-explicit-any */

export function getNestedValue(obj: any, keyPath: string[]): any { // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    return keyPath.reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}

export function setNestedValue(obj: any, keyPath: string[], value: any): void { // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    keyPath.reduce((acc, key, index) => {
        if (index === keyPath.length - 1) {
            acc[key] = value;
        } else {
            acc[key] = acc[key] || {};
        }
        return acc[key];
    }, obj);
}

export function deleteNestedKey(obj: any, keyPath: string[]): void { // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    keyPath.reduce((acc, key, index) => {
        if (index === keyPath.length - 1) {
            delete acc[key];
        }
        return acc[key];
    }, obj);
}

export function flattenObject(
    obj: Record<string, any>, // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    parentKey: string = '',
    separator: string = '.'
): Record<string, any> {
    return Object.keys(obj).reduce((acc: Record<string, any>, key: string) => { // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        const fullPath = parentKey ? `${parentKey}${separator}${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            Object.assign(acc, flattenObject(obj[key], fullPath, separator));
        } else {
            acc[fullPath] = obj[key];
        }
        return acc;
    }, {} as Record<string, any>);
}


export function unflattenObject(flattened: Record<string, any>, separator: string = '.'): Record<string, any> { // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    const result: any = {}; // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    Object.keys(flattened).forEach((key) => {
        const keyPath = key.split(separator);
        setNestedValue(result, keyPath, flattened[key]);
    });
    return result;
}
