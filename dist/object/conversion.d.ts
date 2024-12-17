/* eslint-disable  @typescript-eslint/no-explicit-any */

export declare function toObject(entries: [string, any][]): Record<string, any>;
export declare function fromEntries(entries: [string, any][]): Record<string, any>;
export declare function objectToQueryString(obj: Record<string, any>): string;
export declare function queryStringToObject(queryString: string): Record<string, any>;
