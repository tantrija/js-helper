"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayToObject = arrayToObject;
exports.objectToKeys = objectToKeys;
exports.objectToValues = objectToValues;
exports.keyBy = keyBy;
function arrayToObject(array, keyFn) {
    return array.reduce((obj, item) => {
        obj[keyFn(item)] = item;
        return obj;
    }, {});
}
function objectToKeys(obj) {
    return Object.keys(obj);
}
function objectToValues(obj) {
    return Object.values(obj);
}
function keyBy(array, keyFn) {
    return array.reduce((obj, item) => {
        obj[keyFn(item)] = item;
        return obj;
    }, {});
}
