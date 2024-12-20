/* eslint-disable  @typescript-eslint/no-explicit-any */

export declare function flattenToDepth(array: any[], depth: number): any[];
export declare function mergeSortedArrays(array1: number[], array2: number[]): number[];
export declare function binarySearch(array: number[], target: number): number;
export declare function generateRange(start: number, end: number, step?: number): number[];
export declare function fill<T>(length: number, value: T): T[];
export declare function repeatElement<T>(element: T, times: number): T[];
export declare function compareArrays<T>(array1: T[], array2: T[]): boolean[];
export declare function splitByCondition<T>(array: T[], predicate: (value: T) => boolean): [T[], T[]];
export declare function accumulate(array: number[]): number[];
export declare function cartesianProduct<T>(array1: T[], array2: T[]): [T, T][];
export declare function permutations<T>(array: T[]): T[][];
