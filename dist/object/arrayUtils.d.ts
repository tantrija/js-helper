export declare function groupByKey<T extends object>(array: T[], key: keyof T): Record<string, T[]>;
export declare function sortByKey<T extends object>(array: T[], key: keyof T, ascending?: boolean): T[];
export declare function uniqueByKey<T extends object>(array: T[], key: keyof T): T[];
export declare function findDuplicatesByKey<T extends object>(array: T[], key: keyof T): T[];
export declare function filterByKeys<T extends object>(array: T[], conditions: Partial<T>): T[];
export declare function pluckValuesByKey<T extends object, K extends keyof T>(array: T[], key: K): T[K][];
