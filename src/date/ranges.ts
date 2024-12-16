import { addDays } from "./manipulation";

export const getDateRange = (startDate: Date, endDate: Date): Date[] => {
    const dates: Date[] = [];
    let currentDate = new Date(startDate);
    while (currentDate <= endDate) {
        dates.push(new Date(currentDate));
        currentDate = addDays(currentDate, 1);
    }
    return dates;
};

export const getDaysBetween = (startDate: Date, endDate: Date): number => {
    return Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
};

export const getWeeksBetween = (startDate: Date, endDate: Date): number => {
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


export const getMonthsBetween = (startDate: Date, endDate: Date): number => {
    return (
        (endDate.getFullYear() - startDate.getFullYear()) * 12 +
        endDate.getMonth() -
        startDate.getMonth()
    );
};

export const getYearsBetween = (startDate: Date, endDate: Date): number => {
    return endDate.getFullYear() - startDate.getFullYear();
};

export const getHoursBetween = (startDate: Date, endDate: Date): number => {
    return Math.abs(endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60);
};

export const getMinutesBetween = (startDate: Date, endDate: Date): number => {
    return Math.abs(endDate.getTime() - startDate.getTime()) / (1000 * 60);
};

export const getSecondsBetween = (startDate: Date, endDate: Date): number => {
    return Math.abs(endDate.getTime() - startDate.getTime()) / 1000;
};
