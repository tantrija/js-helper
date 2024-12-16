export const toLocaleDateString = (date: Date, locale: string): string =>
    date.toLocaleDateString(locale);

export const toLocaleTimeString = (date: Date, locale: string): string =>
    date.toLocaleTimeString(locale);

export const toLocaleString = (date: Date, locale: string): string => date.toLocaleString(locale);

export const formatToTimeZone = (date: Date, timeZone: string): string =>
    date.toLocaleString('en-US', { timeZone });
