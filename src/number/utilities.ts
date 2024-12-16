export const normalize = (value: number, min: number, max: number): number =>
    (value - min) / (max - min);

export const mapRange = (value: number, inMin: number, inMax: number, outMin: number, outMax: number): number =>
    ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

export const isDivisibleBy = (num: number, divisor: number): boolean => num % divisor === 0;

export const digitSum = (num: number): number =>
    Math.abs(num).toString().split('').reduce((sum, digit) => sum + Number(digit), 0);

export const digitCount = (num: number): number => Math.abs(num).toString().length;

export const toPercent = (value: number, total: number): string =>
    `${((value / total) * 100).toFixed(2)}%`;

export const fromPercent = (percent: string): number => parseFloat(percent.replace('%', '')) / 100;

export const moduloSafe = (num: number, divisor: number): number => ((num % divisor) + divisor) % divisor;
