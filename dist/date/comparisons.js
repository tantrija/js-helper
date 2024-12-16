"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWeekday = exports.isWeekend = exports.compareDates = exports.isBetween = exports.isSameYear = exports.isSameMonth = exports.isSameDay = exports.isAfter = exports.isBefore = void 0;
const isBefore = (date1, date2) => date1 < date2;
exports.isBefore = isBefore;
const isAfter = (date1, date2) => date1 > date2;
exports.isAfter = isAfter;
const isSameDay = (date1, date2) => {
    const d1 = new Date(date1.toISOString().slice(0, 10));
    const d2 = new Date(date2.toISOString().slice(0, 10));
    return d1.getTime() === d2.getTime();
};
exports.isSameDay = isSameDay;
const isSameMonth = (date1, date2) => {
    return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth();
};
exports.isSameMonth = isSameMonth;
const isSameYear = (date1, date2) => {
    return date1.getFullYear() === date2.getFullYear();
};
exports.isSameYear = isSameYear;
const isBetween = (date, startDate, endDate) => {
    return date >= startDate && date <= endDate;
};
exports.isBetween = isBetween;
const compareDates = (date1, date2) => {
    if (date1 < date2)
        return -1;
    if (date1 > date2)
        return 1;
    return 0;
};
exports.compareDates = compareDates;
const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6;
};
exports.isWeekend = isWeekend;
const isWeekday = (date) => !(0, exports.isWeekend)(date);
exports.isWeekday = isWeekday;
