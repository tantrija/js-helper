"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMatchingKeys = getMatchingKeys;
exports.getMatchingValues = getMatchingValues;
exports.objectDiff = objectDiff;
exports.shallowEqual = shallowEqual;
exports.deepCompare = deepCompare;
function getMatchingKeys(obj1, obj2) {
    return Object.keys(obj1).filter((key) => key in obj2);
}
function getMatchingValues(obj1, obj2) {
    return Object.fromEntries(Object.entries(obj1).filter(([key, value]) => obj2[key] === value));
}
function objectDiff(obj1, obj2) {
    return Object.fromEntries(Object.entries(obj1).filter(([key, value]) => obj2[key] !== value));
}
function shallowEqual(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length)
        return false;
    return Object.entries(obj1).every(([key, value]) => obj2[key] === value);
}
function deepCompare(obj1, obj2) {
    if (obj1 === obj2)
        return true;
    if (typeof obj1 !== typeof obj2 || typeof obj1 !== 'object')
        return false;
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length)
        return false;
    return keys1.every((key) => deepCompare(obj1[key], obj2[key]));
}
