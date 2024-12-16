export const getYear = (date: Date): number => date.getFullYear();

export const getMonth = (date: Date): number => date.getMonth();

export const getDay = (date: Date): number => date.getDate();

export const getWeekday = (date: Date): number => date.getDay();

export const getHours = (date: Date): number => date.getUTCHours();

export const getMinutes = (date: Date): number => date.getUTCMinutes();

export const getSeconds = (date: Date): number => date.getSeconds();

export const getMilliseconds = (date: Date): number => date.getMilliseconds();

export const getTimeZoneOffset = (date: Date): number => date.getTimezoneOffset();
