"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMaxIndex = findMaxIndex;
exports.findMinIndex = findMinIndex;
exports.sortAscending = sortAscending;
exports.sortDescending = sortDescending;
exports.scaleValues = scaleValues;
exports.normalizeValues = normalizeValues;
function findMaxIndex(array) {
    return array.indexOf(Math.max(...array));
}
function findMinIndex(array) {
    return array.indexOf(Math.min(...array));
}
function sortAscending(array) {
    return [...array].sort((a, b) => a - b);
}
function sortDescending(array) {
    return [...array].sort((a, b) => b - a);
}
function scaleValues(array, factor) {
    return array.map((value) => value * factor);
}
function normalizeValues(array) {
    const max = Math.max(...array);
    const min = Math.min(...array);
    return array.map((value) => (value - min) / (max - min));
}
