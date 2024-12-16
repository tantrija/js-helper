export const round = (num: number): number => Math.round(num);
export const ceil = (num: number): number => Math.ceil(num);
export const floor = (num: number): number => Math.floor(num);
export const toFixed = (num: number, decimals: number): string => num.toFixed(decimals);
export const toPrecision = (num: number, precision: number): string => num.toPrecision(precision);
export const truncate = (num: number): number => Math.trunc(num);
export const roundTo = (num: number, decimals: number): number =>
  Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
export const clamp = (num: number, min: number, max: number): number => Math.max(min, Math.min(max, num));
