"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatRelativeTime = exports.ordinalSuffix = exports.getDayName = exports.getMonthName = void 0;
const getMonthName = (date) => date.toLocaleString('default', { month: 'long' });
exports.getMonthName = getMonthName;
const getDayName = (date) => date.toLocaleString('default', { weekday: 'long' });
exports.getDayName = getDayName;
const ordinalSuffix = (day) => {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const value = day % 100;
    return day + (suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0]);
};
exports.ordinalSuffix = ordinalSuffix;
const formatRelativeTime = (date) => {
    const diff = new Date().getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    if (seconds < 60)
        return `${seconds} seconds ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60)
        return `${minutes} minutes ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24)
        return `${hours} hours ago`;
    const days = Math.floor(hours / 24);
    return `${days} days ago`;
};
exports.formatRelativeTime = formatRelativeTime;
