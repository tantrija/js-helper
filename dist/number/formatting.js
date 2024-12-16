"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromRoman = exports.toRoman = exports.addCommas = exports.toExponential = exports.formatCurrency = void 0;
const formatCurrency = (num, currency = '$') => `${currency}${num.toLocaleString()}`;
exports.formatCurrency = formatCurrency;
const toExponential = (num, decimals = 2) => num.toExponential(decimals);
exports.toExponential = toExponential;
const addCommas = (num) => num.toLocaleString();
exports.addCommas = addCommas;
const toRoman = (num) => {
    if (num <= 0 || num >= 4000) {
        throw new RangeError('Number out of range (must be between 1 and 3999)');
    }
    const romanNumerals = [
        [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
        [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
        [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
    ];
    let result = '';
    for (const [value, symbol] of romanNumerals) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }
    return result;
};
exports.toRoman = toRoman;
const fromRoman = (str) => {
    const roman = {
        'M': 1000, 'CM': 900, 'D': 500, 'CD': 400,
        'C': 100, 'XC': 90, 'L': 50, 'XL': 40,
        'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1
    };
    let num = 0, i = 0;
    while (i < str.length) {
        const two = roman[str.slice(i, i + 2)];
        const one = roman[str[i]];
        if (two) {
            num += two;
            i += 2;
        }
        else if (one) {
            num += one;
            i += 1;
        }
    }
    return num;
};
exports.fromRoman = fromRoman;
