"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapToObject = mapToObject;
exports.objectToArray = objectToArray;
exports.groupBy = groupBy;
exports.partition = partition;
exports.sortBy = sortBy;
exports.shuffle = shuffle;
exports.rotate = rotate;
exports.zip = zip;
exports.unzip = unzip;
exports.pluck = pluck;
function mapToObject(array) {
    return Object.fromEntries(array);
}
function objectToArray(obj) {
    return Object.entries(obj);
}
function groupBy(array, keyFn) {
    return array.reduce((result, item) => {
        const key = keyFn(item);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
        return result;
    }, {});
}
function partition(array, predicate) {
    return array.reduce(([pass, fail], elem) => predicate(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]], [[], []]);
}
function sortBy(array, keyFn) {
    return [...array].sort((a, b) => {
        const keyA = keyFn(a);
        const keyB = keyFn(b);
        return keyA < keyB ? -1 : keyA > keyB ? 1 : 0;
    });
}
function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}
function rotate(array, positions) {
    const length = array.length;
    const offset = ((positions % length) + length) % length;
    return [...array.slice(offset), ...array.slice(0, offset)];
}
function zip(array1, array2) {
    return array1.map((item, index) => [item, array2[index]]);
}
function unzip(array) {
    return array.reduce(([arr1, arr2], [item1, item2]) => {
        arr1.push(item1);
        arr2.push(item2);
        return [arr1, arr2];
    }, [[], []]);
}
function pluck(array, key) {
    return array.map((obj) => obj[key]);
}
