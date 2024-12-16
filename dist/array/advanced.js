"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenToDepth = flattenToDepth;
exports.mergeSortedArrays = mergeSortedArrays;
exports.binarySearch = binarySearch;
exports.generateRange = generateRange;
exports.fill = fill;
exports.repeatElement = repeatElement;
exports.compareArrays = compareArrays;
exports.splitByCondition = splitByCondition;
exports.accumulate = accumulate;
exports.cartesianProduct = cartesianProduct;
exports.permutations = permutations;
function flattenToDepth(array, depth) {
    if (depth < 1)
        return array;
    return array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenToDepth(val, depth - 1) : val), []);
}
function mergeSortedArrays(array1, array2) {
    const result = [];
    let i = 0, j = 0;
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            result.push(array1[i++]);
        }
        else {
            result.push(array2[j++]);
        }
    }
    return result.concat(array1.slice(i), array2.slice(j));
}
function binarySearch(array, target) {
    let low = 0, high = array.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (array[mid] === target)
            return mid;
        if (array[mid] < target)
            low = mid + 1;
        else
            high = mid - 1;
    }
    return -1;
}
function generateRange(start, end, step = 1) {
    const range = [];
    for (let i = start; i <= end; i += step) {
        range.push(i);
    }
    return range;
}
function fill(length, value) {
    return Array(length).fill(value);
}
function repeatElement(element, times) {
    return Array(times).fill(element);
}
function compareArrays(array1, array2) {
    const maxLength = Math.max(array1.length, array2.length);
    return Array.from({ length: maxLength }, (_, i) => array1[i] === array2[i]);
}
function splitByCondition(array, predicate) {
    return array.reduce(([pass, fail], elem) => predicate(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]], [[], []]);
}
function accumulate(array) {
    const result = [];
    array.reduce((sum, current) => {
        result.push(sum + current);
        return sum + current;
    }, 0);
    return result;
}
function cartesianProduct(array1, array2) {
    const result = [];
    for (const item1 of array1) {
        for (const item2 of array2) {
            result.push([item1, item2]);
        }
    }
    return result;
}
function permutations(array) {
    if (array.length === 0)
        return [[]];
    return array.flatMap((value, index) => permutations([...array.slice(0, index), ...array.slice(index + 1)]).map((perm) => [value, ...perm]));
}
