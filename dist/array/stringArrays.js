"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinWithDelimiter = joinWithDelimiter;
exports.findLongestString = findLongestString;
exports.findShortestString = findShortestString;
exports.toLowerCaseArray = toLowerCaseArray;
exports.toUpperCaseArray = toUpperCaseArray;
exports.sortAlphabetically = sortAlphabetically;
exports.startsWith = startsWith;
exports.endsWith = endsWith;
exports.containsSubstring = containsSubstring;
function joinWithDelimiter(array, delimiter) {
    return array.join(delimiter);
}
function findLongestString(array) {
    return array.reduce((longest, current) => current.length > longest.length ? current : longest, '');
}
function findShortestString(array) {
    return array.reduce((shortest, current) => current.length < shortest.length ? current : shortest, array[0] || '');
}
function toLowerCaseArray(array) {
    return array.map((str) => str.toLowerCase());
}
function toUpperCaseArray(array) {
    return array.map((str) => str.toUpperCase());
}
function sortAlphabetically(array) {
    return [...array].sort();
}
function startsWith(array, prefix) {
    return array.filter((str) => str.startsWith(prefix));
}
function endsWith(array, suffix) {
    return array.filter((str) => str.endsWith(suffix));
}
function containsSubstring(array, substring) {
    return array.filter((str) => str.includes(substring));
}
