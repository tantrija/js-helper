export function getObjectKeys(obj: object): string[] {
    return Object.keys(obj);
}

export function getObjectValues(obj: object): any[] {
    return Object.values(obj);
}

export function getObjectEntries(obj: object): [string, any][] {
    return Object.entries(obj);
}

export function invertObject(obj: Record<string, any>): Record<any, string> {
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
}

export function filterKeys<T extends object>(obj: T, predicate: (key: keyof T) => boolean): Partial<T> {
    return Object.fromEntries(
        Object.entries(obj).filter(([key]) => predicate(key as keyof T))
    ) as Partial<T>;
}

export function filterValues<T extends object>(obj: T, predicate: (value: T[keyof T]) => boolean): Partial<T> {
    return Object.fromEntries(
        Object.entries(obj).filter(([_, value]) => predicate(value))
    ) as Partial<T>;
}

export function mapKeys<T extends object>(obj: T, transform: (key: keyof T) => string): Record<string, T[keyof T]> {
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [transform(key as keyof T), value])
    );
}

export function mapValues<T extends object>(obj: T, transform: (value: T[keyof T]) => any): Partial<T> {
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [key, transform(value)])
    ) as Partial<T>;
}
