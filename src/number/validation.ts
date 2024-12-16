export const isEven = (num: number): boolean => num % 2 === 0;
export const isOdd = (num: number): boolean => num % 2 !== 0;
export const isPrime = (num: number): boolean => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
export const isInteger = (num: number): boolean => Number.isInteger(num);
export const isFloat = (num: number): boolean => !Number.isInteger(num);
export const isPositive = (num: number): boolean => num > 0;
export const isNegative = (num: number): boolean => num < 0;
export const isZero = (num: number): boolean => num === 0;
export const isFiniteNumber = (num: number): boolean => Number.isFinite(num);
export const isNaN = (value: any): boolean => Number.isNaN(value);
