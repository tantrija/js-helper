"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectSize = objectSize;
exports.freezeDeep = freezeDeep;
exports.camelCaseKeys = camelCaseKeys;
exports.snakeCaseKeys = snakeCaseKeys;
exports.kebabCaseKeys = kebabCaseKeys;
exports.toJSONString = toJSONString;
exports.fromJSONString = fromJSONString;
exports.countByValue = countByValue;
function objectSize(obj) {
    return Object.keys(obj).length;
}
function freezeDeep(obj) {
    Object.freeze(obj);
    Object.keys(obj).forEach((key) => {
        const value = obj[key];
        if (typeof value === 'object' && value !== null && !Object.isFrozen(value)) {
            freezeDeep(value);
        }
    });
    return obj;
}
function camelCaseKeys(obj) {
    const toCamelCase = (str) => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [toCamelCase(key), value]));
}
function snakeCaseKeys(obj) {
    const toSnakeCase = (str) => str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [toSnakeCase(key), value]));
}
function kebabCaseKeys(obj) {
    const toKebabCase = (str) => str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [toKebabCase(key), value]));
}
function toJSONString(obj) {
    return JSON.stringify(obj, null, 2);
}
function fromJSONString(json) {
    return JSON.parse(json);
}
function countByValue(obj) {
    return Object.values(obj).reduce((acc, value) => {
        const stringValue = String(value);
        acc[stringValue] = (acc[stringValue] || 0) + 1;
        return acc;
    }, {});
}
