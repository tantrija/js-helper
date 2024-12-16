"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneDate = exports.fromUnixTimestamp = exports.toUnixTimestamp = exports.toISOString = exports.parseDate = exports.formatTime = exports.formatDate = exports.getCurrentDateTime = exports.getCurrentTime = exports.getCurrentDate = void 0;
const getCurrentDate = () => new Date();
exports.getCurrentDate = getCurrentDate;
const getCurrentTime = () => new Date().toTimeString();
exports.getCurrentTime = getCurrentTime;
const getCurrentDateTime = () => new Date().toISOString();
exports.getCurrentDateTime = getCurrentDateTime;
const formatDate = (date, format) => {
    const map = {
        YYYY: date.getFullYear().toString(),
        MM: ('0' + (date.getMonth() + 1)).slice(-2),
        DD: ('0' + date.getDate()).slice(-2),
        HH: ('0' + date.getHours()).slice(-2),
        mm: ('0' + date.getMinutes()).slice(-2),
        ss: ('0' + date.getSeconds()).slice(-2),
    };
    return format.replace(/YYYY|MM|DD|HH|mm|ss/g, matched => map[matched]);
};
exports.formatDate = formatDate;
const formatTime = (date) => date.toTimeString();
exports.formatTime = formatTime;
const parseDate = (dateString) => {
    const date = new Date(dateString);
    return new Date(date.toISOString().replace('.000Z', 'Z'));
};
exports.parseDate = parseDate;
const toISOString = (date) => date.toISOString();
exports.toISOString = toISOString;
const toUnixTimestamp = (date) => Math.floor(date.getTime() / 1000);
exports.toUnixTimestamp = toUnixTimestamp;
const fromUnixTimestamp = (timestamp) => new Date(timestamp * 1000);
exports.fromUnixTimestamp = fromUnixTimestamp;
const cloneDate = (date) => new Date(date.getTime());
exports.cloneDate = cloneDate;
