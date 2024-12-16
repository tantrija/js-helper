"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimeZoneOffset = exports.getMilliseconds = exports.getSeconds = exports.getMinutes = exports.getHours = exports.getWeekday = exports.getDay = exports.getMonth = exports.getYear = void 0;
const getYear = (date) => date.getFullYear();
exports.getYear = getYear;
const getMonth = (date) => date.getMonth();
exports.getMonth = getMonth;
const getDay = (date) => date.getDate();
exports.getDay = getDay;
const getWeekday = (date) => date.getDay();
exports.getWeekday = getWeekday;
const getHours = (date) => date.getUTCHours();
exports.getHours = getHours;
const getMinutes = (date) => date.getUTCMinutes();
exports.getMinutes = getMinutes;
const getSeconds = (date) => date.getSeconds();
exports.getSeconds = getSeconds;
const getMilliseconds = (date) => date.getMilliseconds();
exports.getMilliseconds = getMilliseconds;
const getTimeZoneOffset = (date) => date.getTimezoneOffset();
exports.getTimeZoneOffset = getTimeZoneOffset;