import { isSameDay } from "./comparisons";
import { addDays } from "./manipulation";

export const isValidDate = (date: any): boolean => {
    return date instanceof Date && !isNaN(date.getTime());
};

export const isLeapYear = (year: number): boolean => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

export const isPastDate = (date: Date): boolean => date < new Date();

export const isFutureDate = (date: Date): boolean => date > new Date();

export const isToday = (date: Date): boolean => isSameDay(date, new Date());

export const isYesterday = (date: Date): boolean => isSameDay(date, addDays(new Date(), -1));

export const isTomorrow = (date: Date): boolean => isSameDay(date, addDays(new Date(), 1));
