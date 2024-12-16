export function mergeObjects<T extends object, U extends object>(target: T, source: U): T & U {
    return { ...target, ...source };
}

export function cloneObject<T extends object>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}

export function shallowClone<T extends object>(obj: T): T {
    return { ...obj };
}

export function freezeObject<T extends object>(obj: T): T {
    return Object.freeze(obj);
}

export function sealObject<T extends object>(obj: T): T {
    return Object.seal(obj);
}

export function assignDefaults<T extends object>(target: T, defaults: Partial<T>): T {
    return { ...defaults, ...target };
}

export function omitKeys<T extends object>(obj: T, keysToOmit: (keyof T)[]): Partial<T> {
    return Object.fromEntries(
        Object.entries(obj).filter(([key]) => !keysToOmit.includes(key as keyof T))
    ) as Partial<T>;
}

export function pickKeys<T extends object>(obj: T, keysToPick: (keyof T)[]): Partial<T> {
    return Object.fromEntries(
        Object.entries(obj).filter(([key]) => keysToPick.includes(key as keyof T))
    ) as Partial<T>;
}

export function renameKeys<T extends object>(obj: T, keyMap: Record<string, string>): Partial<T> {
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [keyMap[key] || key, value])
    ) as Partial<T>;
}

export function removeUndefined<T extends object>(obj: T): Partial<T> {
    return Object.fromEntries(
        Object.entries(obj).filter(([_, value]) => value !== undefined)
    ) as Partial<T>;
}
