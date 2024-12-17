/* eslint-disable  @typescript-eslint/no-explicit-any */

export declare function mapToObject<T>(array: [string, T][]): Record<string, T>;
export declare function objectToArray<T>(obj: Record<string, T>): [string, T][];
export declare function groupBy<T>(array: T[], keyFn: (item: T) => string): Record<string, T[]>;
export declare function partition<T>(array: T[], predicate: (value: T) => boolean): [T[], T[]];
export declare function sortBy<T>(array: T[], keyFn: (item: T) => string | number): T[];
export declare function shuffle<T>(array: T[]): T[];
export declare function rotate<T>(array: T[], positions: number): T[];
export declare function zip<T, U>(array1: T[], array2: U[]): [T, U][];
export declare function unzip<T, U>(array: [T, U][]): [T[], U[]];
export declare function pluck<T>(array: Record<string, any>[], key: string): T[];
