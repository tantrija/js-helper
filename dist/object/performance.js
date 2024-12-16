"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounceObjectUpdates = debounceObjectUpdates;
exports.memoizeObject = memoizeObject;
function debounceObjectUpdates(updateFn, delay) {
    let timeoutId = null;
    return (obj) => {
        if (timeoutId)
            clearTimeout(timeoutId);
        timeoutId = setTimeout(() => updateFn(obj), delay);
    };
}
function memoizeObject(fn) {
    const cache = new Map();
    return (obj) => {
        const key = JSON.stringify(obj);
        if (cache.has(key))
            return cache.get(key);
        const result = fn(obj);
        cache.set(key, result);
        return result;
    };
}
