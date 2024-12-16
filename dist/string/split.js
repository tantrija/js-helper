"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitByDelimiter = splitByDelimiter;
exports.splitByLength = splitByLength;
exports.joinWithDelimiter = joinWithDelimiter;
exports.getWords = getWords;
exports.countWords = countWords;
function splitByDelimiter(str, delimiter) {
    return str.split(delimiter);
}
function splitByLength(str, length) {
    const result = [];
    for (let i = 0; i < str.length; i += length) {
        result.push(str.slice(i, i + length));
    }
    return result;
}
function joinWithDelimiter(parts, delimiter) {
    return parts.join(delimiter);
}
function getWords(str) {
    return str.trim().split(/\s+/);
}
function countWords(str) {
    return getWords(str).length;
}
