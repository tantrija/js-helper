"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupByKey = groupByKey;
exports.sortByKey = sortByKey;
exports.uniqueByKey = uniqueByKey;
exports.findDuplicatesByKey = findDuplicatesByKey;
exports.filterByKeys = filterByKeys;
exports.pluckValuesByKey = pluckValuesByKey;
function groupByKey(array, key) {
    return array.reduce((acc, item) => {
        const groupKey = String(item[key]);
        acc[groupKey] = acc[groupKey] || [];
        acc[groupKey].push(item);
        return acc;
    }, {});
}
function sortByKey(array, key, ascending = true) {
    return [...array].sort((a, b) => {
        const valueA = a[key];
        const valueB = b[key];
        if (valueA < valueB)
            return ascending ? -1 : 1;
        if (valueA > valueB)
            return ascending ? 1 : -1;
        return 0;
    });
}
function uniqueByKey(array, key) {
    const seen = new Set();
    return array.filter((item) => {
        const value = item[key];
        if (seen.has(value))
            return false;
        seen.add(value);
        return true;
    });
}
function findDuplicatesByKey(array, key) {
    const seen = new Set();
    const duplicates = [];
    array.forEach((item) => {
        const value = item[key];
        if (seen.has(value)) {
            duplicates.push(item);
        }
        else {
            seen.add(value);
        }
    });
    return duplicates;
}
function filterByKeys(array, conditions) {
    return array.filter((item) => Object.entries(conditions).every(([key, value]) => item[key] === value));
}
function pluckValuesByKey(array, key) {
    return array.map((item) => item[key]);
}
