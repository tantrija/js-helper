"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMax = findMax;
exports.findMin = findMin;
exports.indexOf = indexOf;
exports.lastIndexOf = lastIndexOf;
exports.contains = contains;
exports.filterByCondition = filterByCondition;
exports.removeFalsyValues = removeFalsyValues;
exports.findDuplicates = findDuplicates;
exports.findUnique = findUnique;
exports.intersect = intersect;
exports.difference = difference;
exports.symmetricDifference = symmetricDifference;
function findMax(array) {
    return Math.max(...array);
}
function findMin(array) {
    return Math.min(...array);
}
function indexOf(array, element) {
    return array.indexOf(element);
}
function lastIndexOf(array, element) {
    return array.lastIndexOf(element);
}
function contains(array, element) {
    return array.includes(element);
}
function filterByCondition(array, predicate) {
    return array.filter(predicate);
}
function removeFalsyValues(array) {
    return array.filter(Boolean);
}
function findDuplicates(array) {
    const seen = new Set();
    const duplicates = new Set();
    for (const item of array) {
        if (seen.has(item)) {
            duplicates.add(item);
        }
        else {
            seen.add(item);
        }
    }
    return Array.from(duplicates);
}
function findUnique(array) {
    return Array.from(new Set(array));
}
function intersect(array1, array2) {
    const set2 = new Set(array2);
    return array1.filter((item) => set2.has(item));
}
function difference(array1, array2) {
    const set2 = new Set(array2);
    return array1.filter((item) => !set2.has(item));
}
function symmetricDifference(array1, array2) {
    const set1 = new Set(array1);
    const set2 = new Set(array2);
    return [
        ...array1.filter((item) => !set2.has(item)),
        ...array2.filter((item) => !set1.has(item)),
    ];
}
