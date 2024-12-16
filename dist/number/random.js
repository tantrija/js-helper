"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffleArray = exports.randomInteger = exports.randomInRange = exports.random = void 0;
const random = () => Math.random();
exports.random = random;
const randomInRange = (min, max) => Math.random() * (max - min) + min;
exports.randomInRange = randomInRange;
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
exports.randomInteger = randomInteger;
const shuffleArray = (arr) => {
    const array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
exports.shuffleArray = shuffleArray;
