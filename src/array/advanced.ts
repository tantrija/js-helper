export function flattenToDepth(array: any[], depth: number): any[] {
    if (depth < 1) return array;
    return array.reduce(
        (acc, val) =>
            acc.concat(Array.isArray(val) ? flattenToDepth(val, depth - 1) : val),
        []
    );
}

export function mergeSortedArrays(array1: number[], array2: number[]): number[] {
    const result: number[] = [];
    let i = 0,
        j = 0;
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            result.push(array1[i++]);
        } else {
            result.push(array2[j++]);
        }
    }
    return result.concat(array1.slice(i), array2.slice(j));
}

export function binarySearch(array: number[], target: number): number {
    let low = 0,
        high = array.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (array[mid] === target) return mid;
        if (array[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}

export function generateRange(start: number, end: number, step = 1): number[] {
    const range: number[] = [];
    for (let i = start; i <= end; i += step) {
        range.push(i);
    }
    return range;
}

export function fill<T>(length: number, value: T): T[] {
    return Array(length).fill(value);
}

export function repeatElement<T>(element: T, times: number): T[] {
    return Array(times).fill(element);
}

export function compareArrays<T>(array1: T[], array2: T[]): boolean[] {
    const maxLength = Math.max(array1.length, array2.length);
    return Array.from({ length: maxLength }, (_, i) => array1[i] === array2[i]);
}

export function splitByCondition<T>(
    array: T[],
    predicate: (value: T) => boolean
): [T[], T[]] {
    return array.reduce(
        ([pass, fail], elem) =>
            predicate(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]],
        [[], []] as [T[], T[]]
    );
}

export function accumulate(array: number[]): number[] {
    const result: number[] = [];
    array.reduce((sum, current) => {
        result.push(sum + current);
        return sum + current;
    }, 0);
    return result;
}

export function cartesianProduct<T>(array1: T[], array2: T[]): [T, T][] {
    const result: [T, T][] = [];
    for (const item1 of array1) {
        for (const item2 of array2) {
            result.push([item1, item2]);
        }
    }
    return result;
}

export function permutations<T>(array: T[]): T[][] {
    if (array.length === 0) return [[]];
    return array.flatMap((value, index) =>
        permutations([...array.slice(0, index), ...array.slice(index + 1)]).map(
            (perm) => [value, ...perm]
        )
    );
}
