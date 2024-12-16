"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomElement = randomElement;
exports.randomElements = randomElements;
exports.randomShuffle = randomShuffle;
function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}
function randomElements(array, count) {
    const result = [];
    const copy = [...array];
    for (let i = 0; i < count && copy.length > 0; i++) {
        const index = Math.floor(Math.random() * copy.length);
        result.push(copy.splice(index, 1)[0]);
    }
    return result;
}
function randomShuffle(array) {
    return array
        .map((item) => ({ item, sortKey: Math.random() }))
        .sort((a, b) => a.sortKey - b.sortKey)
        .map(({ item }) => item);
}
