/* eslint-disable  @typescript-eslint/no-explicit-any */

export function mapToObject<T>(
    array: [string, T][]
): Record<string, T> {
    return Object.fromEntries(array);
}

export function objectToArray<T>(
    obj: Record<string, T>
): [string, T][] {
    return Object.entries(obj);
}

export function groupBy<T>(
    array: T[],
    keyFn: (item: T) => string
): Record<string, T[]> {
    return array.reduce((result, item) => {
        const key = keyFn(item);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
        return result;
    }, {} as Record<string, T[]>);
}

export function partition<T>(
    array: T[],
    predicate: (value: T) => boolean
): [T[], T[]] {
    return array.reduce(
        ([pass, fail], elem) =>
            predicate(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]],
        [[], []] as [T[], T[]]
    );
}

export function sortBy<T>(
    array: T[],
    keyFn: (item: T) => string | number
): T[] {
    return [...array].sort((a, b) => {
        const keyA = keyFn(a);
        const keyB = keyFn(b);
        return keyA < keyB ? -1 : keyA > keyB ? 1 : 0;
    });
}

export function shuffle<T>(array: T[]): T[] {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

export function rotate<T>(array: T[], positions: number): T[] {
    const length = array.length;
    const offset = ((positions % length) + length) % length;
    return [...array.slice(offset), ...array.slice(0, offset)];
}

export function zip<T, U>(array1: T[], array2: U[]): [T, U][] {
    return array1.map((item, index) => [item, array2[index]]);
}

export function unzip<T, U>(array: [T, U][]): [T[], U[]] {
    return array.reduce(
        ([arr1, arr2], [item1, item2]) => {
            arr1.push(item1);
            arr2.push(item2);
            return [arr1, arr2];
        },
        [[], []] as [T[], U[]]
    );
}

export function pluck<T>(
    array: Record<string, any>[],
    key: string
): T[] {
    return array.map((obj) => obj[key]);
}
