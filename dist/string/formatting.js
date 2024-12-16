"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.padStart = padStart;
exports.padEnd = padEnd;
exports.truncate = truncate;
exports.slugify = slugify;
exports.escapeHtml = escapeHtml;
exports.unescapeHtml = unescapeHtml;
exports.insertAt = insertAt;
exports.removeAt = removeAt;
exports.wrap = wrap;
exports.unwrap = unwrap;
function padStart(str, targetLength, padChar = ' ') {
    return str.padStart(targetLength, padChar);
}
function padEnd(str, targetLength, padChar = ' ') {
    return str.padEnd(targetLength, padChar);
}
function truncate(str, maxLength) {
    return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
}
function slugify(str) {
    return str
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+$/g, ''); // Remove trailing hyphens
}
function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
function unescapeHtml(str) {
    return str
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'");
}
function insertAt(str, index, value) {
    return str.slice(0, index) + value + str.slice(index);
}
function removeAt(str, index, count) {
    return str.slice(0, index) + str.slice(index + count);
}
function wrap(str, prefix, suffix) {
    return prefix + str + suffix;
}
function unwrap(str, prefix, suffix) {
    if (str.startsWith(prefix) && str.endsWith(suffix)) {
        return str.slice(prefix.length, str.length - suffix.length);
    }
    return str;
}
