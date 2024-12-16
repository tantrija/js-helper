"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseIntSafe = parseIntSafe;
exports.parseFloatSafe = parseFloatSafe;
exports.toCharArray = toCharArray;
exports.reverseWords = reverseWords;
exports.extractNumbers = extractNumbers;
exports.extractEmails = extractEmails;
exports.extractUrls = extractUrls;
function parseIntSafe(str) {
    const parsed = parseInt(str, 10);
    return isNaN(parsed) ? null : parsed;
}
function parseFloatSafe(str) {
    const parsed = parseFloat(str);
    return isNaN(parsed) ? null : parsed;
}
function toCharArray(str) {
    return str.split('');
}
function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}
function extractNumbers(str) {
    const matches = str.match(/\d+/g);
    return matches ? matches.map(Number) : [];
}
function extractEmails(str) {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    return str.match(emailRegex) || [];
}
function extractUrls(str) {
    const urlRegex = /https?:\/\/[^\s]+/g;
    return str.match(urlRegex) || [];
}
