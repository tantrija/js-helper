"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBase64 = toBase64;
exports.fromBase64 = fromBase64;
exports.customEncodeURIComponent = customEncodeURIComponent;
exports.customDecodeURIComponent = customDecodeURIComponent;
exports.escapeRegex = escapeRegex;
exports.encodeHex = encodeHex;
exports.decodeHex = decodeHex;
function toBase64(str) {
    return Buffer.from(str).toString('base64');
}
function fromBase64(base64) {
    return Buffer.from(base64, 'base64').toString('utf-8');
}
function customEncodeURIComponent(str) {
    return encodeURIComponent(str);
}
function customDecodeURIComponent(encoded) {
    return decodeURIComponent(encoded);
}
function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function encodeHex(str) {
    return Buffer.from(str, 'utf-8').toString('hex');
}
function decodeHex(hex) {
    return Buffer.from(hex, 'hex').toString('utf-8');
}
