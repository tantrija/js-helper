"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSecondsBetween = exports.getMinutesBetween = exports.getHoursBetween = exports.getYearsBetween = exports.getMonthsBetween = exports.getWeeksBetween = exports.getDaysBetween = exports.getDateRange = void 0;
const manipulation_1 = require("./manipulation");
const getDateRange = (startDate, endDate) => {
    const dates = [];
    let currentDate = new Date(startDate);
    while (currentDate <= endDate) {
        dates.push(new Date(currentDate));
        currentDate = (0, manipulation_1.addDays)(currentDate, 1);
    }
    return dates;
};
exports.getDateRange = getDateRange;
const getDaysBetween = (startDate, endDate) => {
    return Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
};
exports.getDaysBetween = getDaysBetween;
const getWeeksBetween = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    // Normalize both dates to the start of their respective weeks (Monday as start of the week)
    const startDay = start.getDay() === 0 ? 7 : start.getDay(); // Treat Sunday as 7
    const endDay = end.getDay() === 0 ? 7 : end.getDay();
    const normalizedStart = new Date(start.getTime() - (startDay - 1) * 24 * 60 * 60 * 1000);
    const normalizedEnd = new Date(end.getTime() + (7 - endDay) * 24 * 60 * 60 * 1000);
    // Calculate full weeks
    const totalDays = Math.ceil((normalizedEnd.getTime() - normalizedStart.getTime()) / (1000 * 60 * 60 * 24));
    return Math.ceil(totalDays / 7);
};
exports.getWeeksBetween = getWeeksBetween;
const getMonthsBetween = (startDate, endDate) => {
    return ((endDate.getFullYear() - startDate.getFullYear()) * 12 +
        endDate.getMonth() -
        startDate.getMonth());
};
exports.getMonthsBetween = getMonthsBetween;
const getYearsBetween = (startDate, endDate) => {
    return endDate.getFullYear() - startDate.getFullYear();
};
exports.getYearsBetween = getYearsBetween;
const getHoursBetween = (startDate, endDate) => {
    return Math.abs(endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60);
};
exports.getHoursBetween = getHoursBetween;
const getMinutesBetween = (startDate, endDate) => {
    return Math.abs(endDate.getTime() - startDate.getTime()) / (1000 * 60);
};
exports.getMinutesBetween = getMinutesBetween;
const getSecondsBetween = (startDate, endDate) => {
    return Math.abs(endDate.getTime() - startDate.getTime()) / 1000;
};
exports.getSecondsBetween = getSecondsBetween;
