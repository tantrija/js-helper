"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeWhitespace = removeWhitespace;
exports.removeNonAlphaNumeric = removeNonAlphaNumeric;
exports.normalizeDiacritics = normalizeDiacritics;
exports.stripHtmlTags = stripHtmlTags;
exports.collapseWhitespace = collapseWhitespace;
exports.removePunctuation = removePunctuation;
function removeWhitespace(str) {
    return str.replace(/\s+/g, '');
}
function removeNonAlphaNumeric(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '');
}
function normalizeDiacritics(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
function stripHtmlTags(str) {
    return str.replace(/<\/?[^>]+(>|$)/g, '');
}
function collapseWhitespace(str) {
    return str.replace(/\s+/g, ' ').trim();
}
function removePunctuation(str) {
    return str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}
