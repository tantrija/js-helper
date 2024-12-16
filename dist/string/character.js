"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.charAt = charAt;
exports.charCodeAt = charCodeAt;
exports.fromCharCode = fromCharCode;
exports.getUniqueCharacters = getUniqueCharacters;
exports.isUpperCase = isUpperCase;
exports.isLowerCase = isLowerCase;
function charAt(str, index) {
    return str.charAt(index);
}
function charCodeAt(str, index) {
    return str.charCodeAt(index);
}
function fromCharCode(code) {
    return String.fromCharCode(code);
}
function getUniqueCharacters(str) {
    return Array.from(new Set(str.split('')));
}
function isUpperCase(str) {
    return str === str.toUpperCase();
}
function isLowerCase(str) {
    return str === str.toLowerCase();
}
