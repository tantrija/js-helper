export function debounceObjectUpdates<T extends object>(
    updateFn: (obj: T) => void,
    delay: number
): (obj: T) => void {
    let timeoutId: NodeJS.Timeout | null = null;
    return (obj: T) => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => updateFn(obj), delay);
    };
}

export function memoizeObject<T extends object, R>(
    fn: (obj: T) => R
): (obj: T) => R {
    const cache = new Map<string, R>();
    return (obj: T) => {
        const key = JSON.stringify(obj);
        if (cache.has(key)) return cache.get(key)!;
        const result = fn(obj);
        cache.set(key, result);
        return result;
    };
}
