export const arithmeticProgression = (start: number, difference: number, length: number): number[] =>
    Array.from({ length }, (_, i) => start + i * difference);

export const geometricProgression = (start: number, ratio: number, length: number): number[] =>
    Array.from({ length }, (_, i) => start * Math.pow(ratio, i));

export const primeFactors = (num: number): number[] => {
    const factors: number[] = [];
    let divisor = 2;
    while (num > 1) {
        while (num % divisor === 0) {
            factors.push(divisor);
            num /= divisor;
        }
        divisor++;
    }
    return factors;
};

export const collatzSequence = (num: number): number[] => {
    const sequence: number[] = [num];
    while (num !== 1) {
        num = num % 2 === 0 ? num / 2 : 3 * num + 1;
        sequence.push(num);
    }
    return sequence;
};

export const pascalTriangle = (rows: number): number[][] => {
    const triangle: number[][] = [];
    for (let i = 0; i < rows; i++) {
        triangle[i] = Array(i + 1).fill(1);
        for (let j = 1; j < i; j++) {
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
    }
    return triangle;
};
