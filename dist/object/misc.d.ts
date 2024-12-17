/* eslint-disable  @typescript-eslint/no-explicit-any */

export declare function objectSize(obj: object): number;
export declare function freezeDeep<T extends object>(obj: T): T;
export declare function camelCaseKeys<T extends object>(obj: T): Record<string, any>;
export declare function snakeCaseKeys<T extends object>(obj: T): Record<string, any>;
export declare function kebabCaseKeys<T extends object>(obj: T): Record<string, any>;
export declare function toJSONString(obj: object): string;
export declare function fromJSONString<T extends object>(json: string): T;
export declare function countByValue<T extends object>(obj: T): Record<string, number>;
