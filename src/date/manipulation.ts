export const addDays = (date: Date, days: number): Date => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
};

export const subtractDays = (date: Date, days: number): Date => addDays(date, -days);

export const addMonths = (date: Date, months: number): Date => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + months);
    return newDate;
};

export const subtractMonths = (date: Date, months: number): Date => addMonths(date, -months);

export const addYears = (date: Date, years: number): Date => {
    const newDate = new Date(date);
    newDate.setFullYear(newDate.getFullYear() + years);
    return newDate;
};

export const subtractYears = (date: Date, years: number): Date => addYears(date, -years);

export const addHours = (date: Date, hours: number): Date => {
    const newDate = new Date(date);
    newDate.setHours(newDate.getHours() + hours);
    return newDate;
};

export const subtractHours = (date: Date, hours: number): Date => addHours(date, -hours);

export const addMinutes = (date: Date, minutes: number): Date => {
    const newDate = new Date(date);
    newDate.setMinutes(newDate.getMinutes() + minutes);
    return newDate;
};

export const subtractMinutes = (date: Date, minutes: number): Date => addMinutes(date, -minutes);

export const addSeconds = (date: Date, seconds: number): Date => {
    const newDate = new Date(date);
    newDate.setSeconds(newDate.getSeconds() + seconds);
    return newDate;
};

export const subtractSeconds = (date: Date, seconds: number): Date => addSeconds(date, -seconds);

export const startOfDay = (date: Date): Date => {
    const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    return utcDate;
};

export const endOfDay = (date: Date): Date => {
    const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999));
    return utcDate;
};


export const startOfMonth = (date: Date): Date => {
    const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), 1));
    return utcDate;
};

export const endOfMonth = (date: Date): Date => {
    const nextMonth = new Date(Date.UTC(date.getFullYear(), date.getMonth() + 1, 1));
    const endOfCurrentMonth = new Date(nextMonth.getTime() - 1);
    return endOfCurrentMonth;
};


export const startOfYear = (date: Date): Date => {
    const utcDate = new Date(Date.UTC(date.getFullYear(), 0, 1));
    return utcDate;
};

export const endOfYear = (date: Date): Date => {
    const nextYear = new Date(Date.UTC(date.getFullYear() + 1, 0, 1));
    const endOfCurrentYear = new Date(nextYear.getTime() - 1);
    return endOfCurrentYear;
};

