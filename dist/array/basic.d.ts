/* eslint-disable  @typescript-eslint/no-explicit-any */

export declare function append<T>(array: T[], element: T): T[];
export declare function prepend<T>(array: T[], element: T): T[];
export declare function insertAt<T>(array: T[], index: number, element: T): T[];
export declare function removeAt<T>(array: T[], index: number): T[];
export declare function replaceAt<T>(array: T[], index: number, element: T): T[];
export declare function removeDuplicates<T>(array: T[]): T[];
export declare function flatten<T>(array: T[][]): T[];
export declare function deepFlatten(array: any[]): any[];
export declare function reverseArray<T>(array: T[]): T[];
export declare function splitArray<T>(array: T[], size: number): T[][];
