export const isBefore = (date1: Date, date2: Date): boolean => date1 < date2;

export const isAfter = (date1: Date, date2: Date): boolean => date1 > date2;

export const isSameDay = (date1: Date, date2: Date): boolean => {
    const d1 = new Date(date1.toISOString().slice(0, 10));
    const d2 = new Date(date2.toISOString().slice(0, 10));
    return d1.getTime() === d2.getTime();
};

export const isSameMonth = (date1: Date, date2: Date): boolean => {
    return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth();
};

export const isSameYear = (date1: Date, date2: Date): boolean => {
    return date1.getFullYear() === date2.getFullYear();
};

export const isBetween = (date: Date, startDate: Date, endDate: Date): boolean => {
    return date >= startDate && date <= endDate;
};

export const compareDates = (date1: Date, date2: Date): -1 | 0 | 1 => {
    if (date1 < date2) return -1;
    if (date1 > date2) return 1;
    return 0;
};

export const isWeekend = (date: Date): boolean => {
    const day = date.getDay();
    return day === 0 || day === 6;
};

export const isWeekday = (date: Date): boolean => !isWeekend(date);
