export const getMonthName = (date: Date): string =>
    date.toLocaleString('default', { month: 'long' });

export const getDayName = (date: Date): string => date.toLocaleString('default', { weekday: 'long' });

export const ordinalSuffix = (day: number): string => {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const value = day % 100;
    return day + (suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0]);
};

export const formatRelativeTime = (date: Date): string => {
    const diff = new Date().getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    if (seconds < 60) return `${seconds} seconds ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minutes ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;
    const days = Math.floor(hours / 24);
    return `${days} days ago`;
};
