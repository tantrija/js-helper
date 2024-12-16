export function findMaxIndex(array: number[]): number {
    return array.indexOf(Math.max(...array));
}

export function findMinIndex(array: number[]): number {
    return array.indexOf(Math.min(...array));
}

export function sortAscending(array: number[]): number[] {
    return [...array].sort((a, b) => a - b);
}

export function sortDescending(array: number[]): number[] {
    return [...array].sort((a, b) => b - a);
}

export function scaleValues(array: number[], factor: number): number[] {
    return array.map((value) => value * factor);
}

export function normalizeValues(array: number[]): number[] {
    const max = Math.max(...array);
    const min = Math.min(...array);
    return array.map((value) => (value - min) / (max - min));
}
