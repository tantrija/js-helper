"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getObjectKeys = getObjectKeys;
exports.getObjectValues = getObjectValues;
exports.getObjectEntries = getObjectEntries;
exports.invertObject = invertObject;
exports.filterKeys = filterKeys;
exports.filterValues = filterValues;
exports.mapKeys = mapKeys;
exports.mapValues = mapValues;
function getObjectKeys(obj) {
    return Object.keys(obj);
}
function getObjectValues(obj) {
    return Object.values(obj);
}
function getObjectEntries(obj) {
    return Object.entries(obj);
}
function invertObject(obj) {
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
}
function filterKeys(obj, predicate) {
    return Object.fromEntries(Object.entries(obj).filter(([key]) => predicate(key)));
}
function filterValues(obj, predicate) {
    return Object.fromEntries(Object.entries(obj).filter(([_, value]) => predicate(value)));
}
function mapKeys(obj, transform) {
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [transform(key), value]));
}
function mapValues(obj, transform) {
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, transform(value)]));
}
