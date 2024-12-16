"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goldenRatio = exports.lcmOfArray = exports.hcfOfArray = exports.sumOfDivisors = exports.factorize = exports.getDigits = exports.kthRoot = exports.isPalindromeNumber = exports.nearestPerfectSquare = exports.nextPrime = exports.isAutomorphic = exports.isHarshadNumber = exports.isPerfectNumber = exports.isArmstrongNumber = void 0;
const utilities_1 = require("./utilities");
const validation_1 = require("./validation");
const isArmstrongNumber = (num) => {
    const digits = num.toString().split('').map(Number);
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
    return sum === num;
};
exports.isArmstrongNumber = isArmstrongNumber;
const isPerfectNumber = (num) => {
    const sum = Array.from({ length: num - 1 }, (_, i) => i + 1).filter((div) => num % div === 0).reduce((a, b) => a + b, 0);
    return sum === num;
};
exports.isPerfectNumber = isPerfectNumber;
const isHarshadNumber = (num) => num % (0, utilities_1.digitSum)(num) === 0;
exports.isHarshadNumber = isHarshadNumber;
const isAutomorphic = (num) => {
    const square = Math.pow(num, 2).toString();
    return square.endsWith(num.toString());
};
exports.isAutomorphic = isAutomorphic;
const nextPrime = (num) => {
    let candidate = num + 1;
    while (!(0, validation_1.isPrime)(candidate)) {
        candidate++;
    }
    return candidate;
};
exports.nextPrime = nextPrime;
const nearestPerfectSquare = (num) => {
    const lower = Math.floor(Math.sqrt(num));
    const upper = Math.ceil(Math.sqrt(num));
    return Math.abs(Math.pow(lower, 2) - num) <= Math.abs(Math.pow(upper, 2) - num) ? Math.pow(lower, 2) : Math.pow(upper, 2);
};
exports.nearestPerfectSquare = nearestPerfectSquare;
const isPalindromeNumber = (num) => {
    const str = num.toString();
    return str === str.split('').reverse().join('');
};
exports.isPalindromeNumber = isPalindromeNumber;
const kthRoot = (num, k) => Math.pow(num, 1 / k);
exports.kthRoot = kthRoot;
const getDigits = (num) => Math.abs(num).toString().split('').map(Number);
exports.getDigits = getDigits;
const factorize = (num) => Array.from({ length: num }, (_, i) => i + 1).filter((factor) => num % factor === 0);
exports.factorize = factorize;
const sumOfDivisors = (num) => (0, exports.factorize)(num).reduce((sum, divisor) => sum + divisor, 0);
exports.sumOfDivisors = sumOfDivisors;
const hcfOfArray = (nums) => nums.reduce((a, b) => gcd(a, b));
exports.hcfOfArray = hcfOfArray;
const lcmOfArray = (nums) => nums.reduce((a, b) => (a * b) / gcd(a, b));
exports.lcmOfArray = lcmOfArray;
const goldenRatio = () => (1 + Math.sqrt(5)) / 2;
exports.goldenRatio = goldenRatio;
// Helper for HCF/LCM
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
