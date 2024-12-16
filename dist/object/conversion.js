"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toObject = toObject;
exports.fromEntries = fromEntries;
exports.objectToQueryString = objectToQueryString;
exports.queryStringToObject = queryStringToObject;
function toObject(entries) {
    return Object.fromEntries(entries);
}
function fromEntries(entries) {
    return Object.fromEntries(entries);
}
function objectToQueryString(obj) {
    return Object.entries(obj)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
}
function queryStringToObject(queryString) {
    return Object.fromEntries(queryString
        .replace(/^\?/, '')
        .split('&')
        .map((param) => param.split('=').map(decodeURIComponent)));
}
