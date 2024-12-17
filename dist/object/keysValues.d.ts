/* eslint-disable  @typescript-eslint/no-explicit-any */

export declare function getObjectKeys(obj: object): string[];
export declare function getObjectValues(obj: object): any[];
export declare function getObjectEntries(obj: object): [string, any][];
export declare function invertObject(obj: Record<string, any>): Record<any, string>;
export declare function filterKeys<T extends object>(obj: T, predicate: (key: keyof T) => boolean): Partial<T>;
export declare function filterValues<T extends object>(obj: T, predicate: (value: T[keyof T]) => boolean): Partial<T>;
export declare function mapKeys<T extends object>(obj: T, transform: (key: keyof T) => string): Record<string, T[keyof T]>;
export declare function mapValues<T extends object>(obj: T, transform: (value: T[keyof T]) => any): Partial<T>;
