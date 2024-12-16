"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endOfYear = exports.startOfYear = exports.endOfMonth = exports.startOfMonth = exports.endOfDay = exports.startOfDay = exports.subtractSeconds = exports.addSeconds = exports.subtractMinutes = exports.addMinutes = exports.subtractHours = exports.addHours = exports.subtractYears = exports.addYears = exports.subtractMonths = exports.addMonths = exports.subtractDays = exports.addDays = void 0;
const addDays = (date, days) => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
};
exports.addDays = addDays;
const subtractDays = (date, days) => (0, exports.addDays)(date, -days);
exports.subtractDays = subtractDays;
const addMonths = (date, months) => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + months);
    return newDate;
};
exports.addMonths = addMonths;
const subtractMonths = (date, months) => (0, exports.addMonths)(date, -months);
exports.subtractMonths = subtractMonths;
const addYears = (date, years) => {
    const newDate = new Date(date);
    newDate.setFullYear(newDate.getFullYear() + years);
    return newDate;
};
exports.addYears = addYears;
const subtractYears = (date, years) => (0, exports.addYears)(date, -years);
exports.subtractYears = subtractYears;
const addHours = (date, hours) => {
    const newDate = new Date(date);
    newDate.setHours(newDate.getHours() + hours);
    return newDate;
};
exports.addHours = addHours;
const subtractHours = (date, hours) => (0, exports.addHours)(date, -hours);
exports.subtractHours = subtractHours;
const addMinutes = (date, minutes) => {
    const newDate = new Date(date);
    newDate.setMinutes(newDate.getMinutes() + minutes);
    return newDate;
};
exports.addMinutes = addMinutes;
const subtractMinutes = (date, minutes) => (0, exports.addMinutes)(date, -minutes);
exports.subtractMinutes = subtractMinutes;
const addSeconds = (date, seconds) => {
    const newDate = new Date(date);
    newDate.setSeconds(newDate.getSeconds() + seconds);
    return newDate;
};
exports.addSeconds = addSeconds;
const subtractSeconds = (date, seconds) => (0, exports.addSeconds)(date, -seconds);
exports.subtractSeconds = subtractSeconds;
const startOfDay = (date) => {
    const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    return utcDate;
};
exports.startOfDay = startOfDay;
const endOfDay = (date) => {
    const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999));
    return utcDate;
};
exports.endOfDay = endOfDay;
const startOfMonth = (date) => {
    const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), 1));
    return utcDate;
};
exports.startOfMonth = startOfMonth;
const endOfMonth = (date) => {
    const nextMonth = new Date(Date.UTC(date.getFullYear(), date.getMonth() + 1, 1));
    const endOfCurrentMonth = new Date(nextMonth.getTime() - 1);
    return endOfCurrentMonth;
};
exports.endOfMonth = endOfMonth;
const startOfYear = (date) => {
    const utcDate = new Date(Date.UTC(date.getFullYear(), 0, 1));
    return utcDate;
};
exports.startOfYear = startOfYear;
const endOfYear = (date) => {
    const nextYear = new Date(Date.UTC(date.getFullYear() + 1, 0, 1));
    const endOfCurrentYear = new Date(nextYear.getTime() - 1);
    return endOfCurrentYear;
};
exports.endOfYear = endOfYear;
