import { addDays, endOfMonth, subtractDays } from "./manipulation";
import { getDaysBetween } from "./ranges";

export const getWeekNumber = (date: Date): number => {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const days = getDaysBetween(startOfYear, date);
    return Math.ceil((days + startOfYear.getDay() + 1) / 7);
};

export const getFirstDayOfWeek = (date: Date): Date => {
    const day = date.getDay();
    return subtractDays(date, day);
};

export const getLastDayOfWeek = (date: Date): Date => {
    const day = date.getDay();
    return addDays(date, 6 - day);
};

export const getQuarter = (date: Date): number => Math.ceil((date.getMonth() + 1) / 3);

export const getStartOfQuarter = (date: Date): Date => {
    const quarter = getQuarter(date);
    const startMonth = (quarter - 1) * 3;
    return new Date(date.getFullYear(), startMonth, 1);
};

export const getEndOfQuarter = (date: Date): Date => {
    const quarter = getQuarter(date);
    const endMonth = quarter * 3 - 1;
    return endOfMonth(new Date(date.getFullYear(), endMonth, 1));
};
