"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNestedValue = getNestedValue;
exports.setNestedValue = setNestedValue;
exports.deleteNestedKey = deleteNestedKey;
exports.flattenObject = flattenObject;
exports.unflattenObject = unflattenObject;
function getNestedValue(obj, keyPath) {
    return keyPath.reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}
function setNestedValue(obj, keyPath, value) {
    keyPath.reduce((acc, key, index) => {
        if (index === keyPath.length - 1) {
            acc[key] = value;
        }
        else {
            acc[key] = acc[key] || {};
        }
        return acc[key];
    }, obj);
}
function deleteNestedKey(obj, keyPath) {
    keyPath.reduce((acc, key, index) => {
        if (index === keyPath.length - 1) {
            delete acc[key];
        }
        return acc[key];
    }, obj);
}
function flattenObject(obj, parentKey = '', separator = '.') {
    return Object.keys(obj).reduce((acc, key) => {
        const fullPath = parentKey ? `${parentKey}${separator}${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            Object.assign(acc, flattenObject(obj[key], fullPath, separator));
        }
        else {
            acc[fullPath] = obj[key];
        }
        return acc;
    }, {});
}
function unflattenObject(flattened, separator = '.') {
    const result = {};
    Object.keys(flattened).forEach((key) => {
        const keyPath = key.split(separator);
        setNestedValue(result, keyPath, flattened[key]);
    });
    return result;
}
