export declare function debounceObjectUpdates<T extends object>(updateFn: (obj: T) => void, delay: number): (obj: T) => void;
export declare function memoizeObject<T extends object, R>(fn: (obj: T) => R): (obj: T) => R;
