"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = isEmpty;
exports.isArray = isArray;
exports.hasDuplicates = hasDuplicates;
exports.isEqual = isEqual;
exports.isSortedAscending = isSortedAscending;
exports.isSortedDescending = isSortedDescending;
exports.hasSubset = hasSubset;
function isEmpty(array) {
    return array.length === 0;
}
function isArray(value) {
    return Array.isArray(value);
}
function hasDuplicates(array) {
    return new Set(array).size !== array.length;
}
function isEqual(array1, array2) {
    if (array1.length !== array2.length)
        return false;
    return array1.every((value, index) => value === array2[index]);
}
function isSortedAscending(array) {
    return array.every((value, index) => index === 0 || value >= array[index - 1]);
}
function isSortedDescending(array) {
    return array.every((value, index) => index === 0 || value <= array[index - 1]);
}
function hasSubset(array, subset) {
    return subset.every((value) => array.includes(value));
}
