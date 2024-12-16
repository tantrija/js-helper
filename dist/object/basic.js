"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeObjects = mergeObjects;
exports.cloneObject = cloneObject;
exports.shallowClone = shallowClone;
exports.freezeObject = freezeObject;
exports.sealObject = sealObject;
exports.assignDefaults = assignDefaults;
exports.omitKeys = omitKeys;
exports.pickKeys = pickKeys;
exports.renameKeys = renameKeys;
exports.removeUndefined = removeUndefined;
function mergeObjects(target, source) {
    return Object.assign(Object.assign({}, target), source);
}
function cloneObject(obj) {
    return JSON.parse(JSON.stringify(obj));
}
function shallowClone(obj) {
    return Object.assign({}, obj);
}
function freezeObject(obj) {
    return Object.freeze(obj);
}
function sealObject(obj) {
    return Object.seal(obj);
}
function assignDefaults(target, defaults) {
    return Object.assign(Object.assign({}, defaults), target);
}
function omitKeys(obj, keysToOmit) {
    return Object.fromEntries(Object.entries(obj).filter(([key]) => !keysToOmit.includes(key)));
}
function pickKeys(obj, keysToPick) {
    return Object.fromEntries(Object.entries(obj).filter(([key]) => keysToPick.includes(key)));
}
function renameKeys(obj, keyMap) {
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [keyMap[key] || key, value]));
}
function removeUndefined(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([_, value]) => value !== undefined));
}
