/* eslint-disable  @typescript-eslint/no-explicit-any */

export function objectSize(obj: object): number {
    return Object.keys(obj).length;
}

export function freezeDeep<T extends object>(obj: T): T {
    Object.freeze(obj);
    Object.keys(obj).forEach((key) => {
        const value = (obj as any)[key]; // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        if (typeof value === 'object' && value !== null && !Object.isFrozen(value)) {
            freezeDeep(value);
        }
    });
    return obj;
}

export function camelCaseKeys<T extends object>(obj: T): Record<string, any> { // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    const toCamelCase = (str: string) =>
        str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [toCamelCase(key), value])
    );
}

export function snakeCaseKeys<T extends object>(obj: T): Record<string, any> { // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    const toSnakeCase = (str: string) =>
        str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [toSnakeCase(key), value])
    );
}

export function kebabCaseKeys<T extends object>(obj: T): Record<string, any> { // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    const toKebabCase = (str: string) =>
        str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [toKebabCase(key), value])
    );
}

export function toJSONString(obj: object): string {
    return JSON.stringify(obj, null, 2);
}

export function fromJSONString<T extends object>(json: string): T {
    return JSON.parse(json);
}

export function countByValue<T extends object>(obj: T): Record<string, number> {
    return Object.values(obj).reduce((acc, value) => {
        const stringValue = String(value);
        acc[stringValue] = (acc[stringValue] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);
}
