import { digitSum } from "./utilities";
import { isPrime } from "./validation";

export const isArmstrongNumber = (num: number): boolean => {
    const digits = num.toString().split('').map(Number);
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
    return sum === num;
};

export const isPerfectNumber = (num: number): boolean => {
    const sum = Array.from({ length: num - 1 }, (_, i) => i + 1).filter((div) => num % div === 0).reduce((a, b) => a + b, 0);
    return sum === num;
};

export const isHarshadNumber = (num: number): boolean => num % digitSum(num) === 0;

export const isAutomorphic = (num: number): boolean => {
    const square = Math.pow(num, 2).toString();
    return square.endsWith(num.toString());
};

export const nextPrime = (num: number): number => {
    let candidate = num + 1;
    while (!isPrime(candidate)) {
        candidate++;
    }
    return candidate;
};

export const nearestPerfectSquare = (num: number): number => {
    const lower = Math.floor(Math.sqrt(num));
    const upper = Math.ceil(Math.sqrt(num));
    return Math.abs(lower ** 2 - num) <= Math.abs(upper ** 2 - num) ? lower ** 2 : upper ** 2;
};

export const isPalindromeNumber = (num: number): boolean => {
    const str = num.toString();
    return str === str.split('').reverse().join('');
};

export const kthRoot = (num: number, k: number): number => Math.pow(num, 1 / k);

export const getDigits = (num: number): number[] =>
    Math.abs(num).toString().split('').map(Number);

export const factorize = (num: number): number[] =>
    Array.from({ length: num }, (_, i) => i + 1).filter((factor) => num % factor === 0);

export const sumOfDivisors = (num: number): number =>
    factorize(num).reduce((sum, divisor) => sum + divisor, 0);

export const hcfOfArray = (nums: number[]): number => nums.reduce((a, b) => gcd(a, b));

export const lcmOfArray = (nums: number[]): number => nums.reduce((a, b) => (a * b) / gcd(a, b));

export const goldenRatio = (): number => (1 + Math.sqrt(5)) / 2;

// Helper for HCF/LCM
const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
