"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.append = append;
exports.prepend = prepend;
exports.insertAt = insertAt;
exports.removeAt = removeAt;
exports.replaceAt = replaceAt;
exports.removeDuplicates = removeDuplicates;
exports.flatten = flatten;
exports.deepFlatten = deepFlatten;
exports.reverseArray = reverseArray;
exports.splitArray = splitArray;
function append(array, element) {
    return [...array, element];
}
function prepend(array, element) {
    return [element, ...array];
}
function insertAt(array, index, element) {
    return [...array.slice(0, index), element, ...array.slice(index)];
}
function removeAt(array, index) {
    return [...array.slice(0, index), ...array.slice(index + 1)];
}
function replaceAt(array, index, element) {
    return [...array.slice(0, index), element, ...array.slice(index + 1)];
}
function removeDuplicates(array) {
    return Array.from(new Set(array));
}
function flatten(array) {
    return array.reduce((acc, val) => acc.concat(val), []);
}
function deepFlatten(array) {
    return array.reduce((acc, val) => acc.concat(Array.isArray(val) ? deepFlatten(val) : val), []);
}
function reverseArray(array) {
    return [...array].reverse();
}
function splitArray(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}
