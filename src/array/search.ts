export function findMax(array: number[]): number | undefined {
    return Math.max(...array);
}

export function findMin(array: number[]): number | undefined {
    return Math.min(...array);
}

export function indexOf<T>(array: T[], element: T): number {
    return array.indexOf(element);
}

export function lastIndexOf<T>(array: T[], element: T): number {
    return array.lastIndexOf(element);
}

export function contains<T>(array: T[], element: T): boolean {
    return array.includes(element);
}

export function filterByCondition<T>(
    array: T[],
    predicate: (value: T) => boolean
): T[] {
    return array.filter(predicate);
}

export function removeFalsyValues<T>(array: T[]): T[] {
    return array.filter(Boolean);
}

export function findDuplicates<T>(array: T[]): T[] {
    const seen = new Set<T>();
    const duplicates = new Set<T>();
    for (const item of array) {
        if (seen.has(item)) {
            duplicates.add(item);
        } else {
            seen.add(item);
        }
    }
    return Array.from(duplicates);
}

export function findUnique<T>(array: T[]): T[] {
    return Array.from(new Set(array));
}

export function intersect<T>(array1: T[], array2: T[]): T[] {
    const set2 = new Set(array2);
    return array1.filter((item) => set2.has(item));
}

export function difference<T>(array1: T[], array2: T[]): T[] {
    const set2 = new Set(array2);
    return array1.filter((item) => !set2.has(item));
}

export function symmetricDifference<T>(array1: T[], array2: T[]): T[] {
    const set1 = new Set(array1);
    const set2 = new Set(array2);
    return [
        ...array1.filter((item) => !set2.has(item)),
        ...array2.filter((item) => !set1.has(item)),
    ];
}
