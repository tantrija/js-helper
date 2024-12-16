"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTomorrow = exports.isYesterday = exports.isToday = exports.isFutureDate = exports.isPastDate = exports.isLeapYear = exports.isValidDate = void 0;
const comparisons_1 = require("./comparisons");
const manipulation_1 = require("./manipulation");
const isValidDate = (date) => {
    return date instanceof Date && !isNaN(date.getTime());
};
exports.isValidDate = isValidDate;
const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
exports.isLeapYear = isLeapYear;
const isPastDate = (date) => date < new Date();
exports.isPastDate = isPastDate;
const isFutureDate = (date) => date > new Date();
exports.isFutureDate = isFutureDate;
const isToday = (date) => (0, comparisons_1.isSameDay)(date, new Date());
exports.isToday = isToday;
const isYesterday = (date) => (0, comparisons_1.isSameDay)(date, (0, manipulation_1.addDays)(new Date(), -1));
exports.isYesterday = isYesterday;
const isTomorrow = (date) => (0, comparisons_1.isSameDay)(date, (0, manipulation_1.addDays)(new Date(), 1));
exports.isTomorrow = isTomorrow;
