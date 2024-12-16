"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.standardDeviation = exports.variance = exports.range = exports.mode = exports.median = exports.sum = exports.average = exports.max = exports.min = void 0;
const min = (...nums) => Math.min(...nums);
exports.min = min;
const max = (...nums) => Math.max(...nums);
exports.max = max;
const average = (nums) => nums.length ? nums.reduce((acc, num) => acc + num, 0) / nums.length : NaN;
exports.average = average;
const sum = (nums) => nums.reduce((acc, num) => acc + num, 0);
exports.sum = sum;
const median = (nums) => {
    const sorted = [...nums].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
};
exports.median = median;
const mode = (nums) => {
    const freq = {};
    nums.forEach((num) => (freq[num] = (freq[num] || 0) + 1));
    const maxFreq = Math.max(...Object.values(freq));
    return Object.keys(freq).filter((key) => freq[Number(key)] === maxFreq).map(Number);
};
exports.mode = mode;
const range = (nums) => Math.max(...nums) - Math.min(...nums);
exports.range = range;
const variance = (nums) => {
    const avg = (0, exports.average)(nums);
    return nums.reduce((acc, num) => acc + Math.pow(num - avg, 2), 0) / nums.length;
};
exports.variance = variance;
const standardDeviation = (nums) => Math.sqrt((0, exports.variance)(nums));
exports.standardDeviation = standardDeviation;
