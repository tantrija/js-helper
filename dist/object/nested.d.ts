/* eslint-disable  @typescript-eslint/no-explicit-any */

export declare function getNestedValue(obj: any, keyPath: string[]): any;
export declare function setNestedValue(obj: any, keyPath: string[], value: any): void;
export declare function deleteNestedKey(obj: any, keyPath: string[]): void;
export declare function flattenObject(obj: Record<string, any>, parentKey?: string, separator?: string): Record<string, any>;
export declare function unflattenObject(flattened: Record<string, any>, separator?: string): Record<string, any>;
