"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCamelCase = toCamelCase;
exports.toPascalCase = toPascalCase;
exports.toSnakeCase = toSnakeCase;
exports.toKebabCase = toKebabCase;
exports.swapCase = swapCase;
exports.toTitleCase = toTitleCase;
exports.toSentenceCase = toSentenceCase;
exports.toSpongeCase = toSpongeCase;
function toCamelCase(str) {
    return str.replace(/([-_][a-z])/g, group => group.toUpperCase().replace(/[-_]/g, ''));
}
function toPascalCase(str) {
    return str
        .replace(/([-_][a-z])/g, group => group.toUpperCase().replace(/[-_]/g, ''))
        .replace(/^\w/, char => char.toUpperCase());
}
function toSnakeCase(str) {
    return str.replace(/([A-Z])/g, '_$1').toLowerCase().replace(/^_/, '');
}
function toKebabCase(str) {
    return str.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
}
function swapCase(str) {
    return str
        .split('')
        .map(char => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()))
        .join('');
}
function toTitleCase(str) {
    return str.replace(/\w\S*/g, word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
}
function toSentenceCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
function toSpongeCase(str) {
    return str
        .split('')
        .map((char, index) => (index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()))
        .join('');
}
