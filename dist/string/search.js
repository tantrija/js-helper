"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contains = contains;
exports.startsWith = startsWith;
exports.endsWith = endsWith;
exports.isEmpty = isEmpty;
exports.isPalindrome = isPalindrome;
exports.countOccurrences = countOccurrences;
exports.indexOf = indexOf;
exports.lastIndexOf = lastIndexOf;
exports.matchesPattern = matchesPattern;
exports.isAlpha = isAlpha;
exports.isNumeric = isNumeric;
exports.isAlphaNumeric = isAlphaNumeric;
function contains(str, substring) {
    return str.includes(substring);
}
function startsWith(str, prefix) {
    return str.startsWith(prefix);
}
function endsWith(str, suffix) {
    return str.endsWith(suffix);
}
function isEmpty(str) {
    return str.trim().length === 0;
}
function isPalindrome(str) {
    const cleaned = str.replace(/[\W_]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}
function countOccurrences(str, char) {
    return (str.match(new RegExp(char, 'g')) || []).length;
}
function indexOf(str, searchValue) {
    return str.indexOf(searchValue);
}
function lastIndexOf(str, searchValue) {
    return str.lastIndexOf(searchValue);
}
function matchesPattern(str, pattern) {
    return pattern.test(str);
}
function isAlpha(str) {
    return /^[A-Za-z]+$/.test(str);
}
function isNumeric(str) {
    return /^[0-9]+$/.test(str);
}
function isAlphaNumeric(str) {
    return /^[A-Za-z0-9]+$/.test(str);
}
