/* eslint-disable  @typescript-eslint/no-explicit-any */

export declare function getMatchingKeys<T extends object, U extends object>(obj1: T, obj2: U): (keyof T & keyof U)[];
export declare function getMatchingValues<T extends object, U extends object>(obj1: T, obj2: U): Partial<T & U>;
export declare function objectDiff<T extends object, U extends object>(obj1: T, obj2: U): Partial<T | U>;
export declare function shallowEqual<T extends object>(obj1: T, obj2: T): boolean;
export declare function deepCompare(obj1: any, obj2: any): boolean;
