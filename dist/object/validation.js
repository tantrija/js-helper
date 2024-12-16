"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasKey = hasKey;
exports.isEmptyObject = isEmptyObject;
exports.isDeepEqual = isDeepEqual;
exports.hasNestedKey = hasNestedKey;
exports.isObject = isObject;
exports.isFrozen = isFrozen;
exports.isSealed = isSealed;
function hasKey(obj, key) {
    return key in obj;
}
function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
}
function isDeepEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}
function hasNestedKey(obj, keyPath) {
    return keyPath.reduce((acc, key) => (acc && acc[key] ? acc[key] : undefined), obj) !== undefined;
}
function isObject(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}
function isFrozen(obj) {
    return Object.isFrozen(obj);
}
function isSealed(obj) {
    return Object.isSealed(obj);
}
