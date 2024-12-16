export function arrayToObject<T>(
    array: T[],
    keyFn: (item: T) => string
): Record<string, T> {
    return array.reduce((obj, item) => {
        obj[keyFn(item)] = item;
        return obj;
    }, {} as Record<string, T>);
}

export function objectToKeys(obj: Record<string, any>): string[] {
    return Object.keys(obj);
}

export function objectToValues<T>(obj: Record<string, T>): T[] {
    return Object.values(obj);
}

export function keyBy<T>(
    array: T[],
    keyFn: (item: T) => string
): Record<string, T> {
    return array.reduce((obj, item) => {
        obj[keyFn(item)] = item;
        return obj;
    }, {} as Record<string, T>);
}
