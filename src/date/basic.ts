export const getCurrentDate = (): Date => new Date();

export const getCurrentTime = (): string => new Date().toTimeString();

export const getCurrentDateTime = (): string => new Date().toISOString();

export const formatDate = (date: Date, format: string): string => {
    const map: { [key: string]: string } = {
        YYYY: date.getFullYear().toString(),
        MM: ('0' + (date.getMonth() + 1)).slice(-2),
        DD: ('0' + date.getDate()).slice(-2),
        HH: ('0' + date.getHours()).slice(-2),
        mm: ('0' + date.getMinutes()).slice(-2),
        ss: ('0' + date.getSeconds()).slice(-2),
    };
    return format.replace(/YYYY|MM|DD|HH|mm|ss/g, matched => map[matched]);
};

export const formatTime = (date: Date): string => date.toTimeString();

export const parseDate = (dateString: string): Date => {
    const date = new Date(dateString);
    return new Date(date.toISOString().replace('.000Z', 'Z'));
};

export const toISOString = (date: Date): string => date.toISOString();

export const toUnixTimestamp = (date: Date): number => Math.floor(date.getTime() / 1000);

export const fromUnixTimestamp = (timestamp: number): Date => new Date(timestamp * 1000);

export const cloneDate = (date: Date): Date => new Date(date.getTime());
