"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashString = hashString;
exports.generateRandomString = generateRandomString;
exports.obfuscateEmail = obfuscateEmail;
exports.formatCurrency = formatCurrency;
exports.splitByRegex = splitByRegex;
exports.maskString = maskString;
exports.removeDuplicateWords = removeDuplicateWords;
const crypto_1 = __importDefault(require("crypto"));
function hashString(str, algorithm = 'sha256') {
    return crypto_1.default.createHash(algorithm).update(str).digest('hex');
}
function generateRandomString(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
function obfuscateEmail(email) {
    const [localPart, domain] = email.split('@');
    return localPart[0] + '***' + localPart.slice(-1) + '@' + domain;
}
function formatCurrency(value, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
    }).format(value);
}
function splitByRegex(str, regex) {
    return str.split(regex);
}
function maskString(str, start, end, maskChar = '*') {
    return (str.slice(0, start) +
        maskChar.repeat(Math.max(0, end - start)) +
        str.slice(end));
}
function removeDuplicateWords(str) {
    const words = str.split(' ');
    return Array.from(new Set(words)).join(' ');
}
