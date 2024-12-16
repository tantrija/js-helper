"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equals = equals;
exports.equalsIgnoreCase = equalsIgnoreCase;
exports.compareLexicographically = compareLexicographically;
exports.startsWithAny = startsWithAny;
exports.endsWithAny = endsWithAny;
function equals(str1, str2) {
    return str1 === str2;
}
function equalsIgnoreCase(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
function compareLexicographically(str1, str2) {
    return str1.localeCompare(str2);
}
function startsWithAny(str, prefixes) {
    return prefixes.some(prefix => str.startsWith(prefix));
}
function endsWithAny(str, suffixes) {
    return suffixes.some(suffix => str.endsWith(suffix));
}
