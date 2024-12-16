"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pascalTriangle = exports.collatzSequence = exports.primeFactors = exports.geometricProgression = exports.arithmeticProgression = void 0;
const arithmeticProgression = (start, difference, length) => Array.from({ length }, (_, i) => start + i * difference);
exports.arithmeticProgression = arithmeticProgression;
const geometricProgression = (start, ratio, length) => Array.from({ length }, (_, i) => start * Math.pow(ratio, i));
exports.geometricProgression = geometricProgression;
const primeFactors = (num) => {
    const factors = [];
    let divisor = 2;
    while (num > 1) {
        while (num % divisor === 0) {
            factors.push(divisor);
            num /= divisor;
        }
        divisor++;
    }
    return factors;
};
exports.primeFactors = primeFactors;
const collatzSequence = (num) => {
    const sequence = [num];
    while (num !== 1) {
        num = num % 2 === 0 ? num / 2 : 3 * num + 1;
        sequence.push(num);
    }
    return sequence;
};
exports.collatzSequence = collatzSequence;
const pascalTriangle = (rows) => {
    const triangle = [];
    for (let i = 0; i < rows; i++) {
        triangle[i] = Array(i + 1).fill(1);
        for (let j = 1; j < i; j++) {
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
    }
    return triangle;
};
exports.pascalTriangle = pascalTriangle;
