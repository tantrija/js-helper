"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEndOfQuarter = exports.getStartOfQuarter = exports.getQuarter = exports.getLastDayOfWeek = exports.getFirstDayOfWeek = exports.getWeekNumber = void 0;
const manipulation_1 = require("./manipulation");
const ranges_1 = require("./ranges");
const getWeekNumber = (date) => {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const days = (0, ranges_1.getDaysBetween)(startOfYear, date);
    return Math.ceil((days + startOfYear.getDay() + 1) / 7);
};
exports.getWeekNumber = getWeekNumber;
const getFirstDayOfWeek = (date) => {
    const day = date.getDay();
    return (0, manipulation_1.subtractDays)(date, day);
};
exports.getFirstDayOfWeek = getFirstDayOfWeek;
const getLastDayOfWeek = (date) => {
    const day = date.getDay();
    return (0, manipulation_1.addDays)(date, 6 - day);
};
exports.getLastDayOfWeek = getLastDayOfWeek;
const getQuarter = (date) => Math.ceil((date.getMonth() + 1) / 3);
exports.getQuarter = getQuarter;
const getStartOfQuarter = (date) => {
    const quarter = (0, exports.getQuarter)(date);
    const startMonth = (quarter - 1) * 3;
    return new Date(date.getFullYear(), startMonth, 1);
};
exports.getStartOfQuarter = getStartOfQuarter;
const getEndOfQuarter = (date) => {
    const quarter = (0, exports.getQuarter)(date);
    const endMonth = quarter * 3 - 1;
    return (0, manipulation_1.endOfMonth)(new Date(date.getFullYear(), endMonth, 1));
};
exports.getEndOfQuarter = getEndOfQuarter;
