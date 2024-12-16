"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = capitalize;
exports.toUpperCase = toUpperCase;
exports.toLowerCase = toLowerCase;
exports.reverseString = reverseString;
exports.repeatString = repeatString;
exports.trim = trim;
exports.trimStart = trimStart;
exports.trimEnd = trimEnd;
exports.replace = replace;
exports.replaceAll = replaceAll;
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
function toUpperCase(str) {
    return str.toUpperCase();
}
function toLowerCase(str) {
    return str.toLowerCase();
}
function reverseString(str) {
    return str.split('').reverse().join('');
}
function repeatString(str, count) {
    return str.repeat(count);
}
function trim(str) {
    return str.trim();
}
function trimStart(str) {
    return str.trimStart();
}
function trimEnd(str) {
    return str.trimEnd();
}
function replace(str, search, replaceValue) {
    return str.replace(search, replaceValue);
}
function replaceAll(str, search, replaceValue) {
    return str.split(search).join(replaceValue);
}
