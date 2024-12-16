export declare function arrayToObject<T>(array: T[], keyFn: (item: T) => string): Record<string, T>;
export declare function objectToKeys(obj: Record<string, any>): string[];
export declare function objectToValues<T>(obj: Record<string, T>): T[];
export declare function keyBy<T>(array: T[], keyFn: (item: T) => string): Record<string, T>;
