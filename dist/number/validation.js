"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNaN = exports.isFiniteNumber = exports.isZero = exports.isNegative = exports.isPositive = exports.isFloat = exports.isInteger = exports.isPrime = exports.isOdd = exports.isEven = void 0;
const isEven = (num) => num % 2 === 0;
exports.isEven = isEven;
const isOdd = (num) => num % 2 !== 0;
exports.isOdd = isOdd;
const isPrime = (num) => {
    if (num <= 1)
        return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0)
            return false;
    }
    return true;
};
exports.isPrime = isPrime;
const isInteger = (num) => Number.isInteger(num);
exports.isInteger = isInteger;
const isFloat = (num) => !Number.isInteger(num);
exports.isFloat = isFloat;
const isPositive = (num) => num > 0;
exports.isPositive = isPositive;
const isNegative = (num) => num < 0;
exports.isNegative = isNegative;
const isZero = (num) => num === 0;
exports.isZero = isZero;
const isFiniteNumber = (num) => Number.isFinite(num);
exports.isFiniteNumber = isFiniteNumber;
const isNaN = (value) => Number.isNaN(value);
exports.isNaN = isNaN;
