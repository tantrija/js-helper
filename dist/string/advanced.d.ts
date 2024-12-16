export declare function hashString(str: string, algorithm?: 'md5' | 'sha256'): string;
export declare function generateRandomString(length: number): string;
export declare function obfuscateEmail(email: string): string;
export declare function formatCurrency(value: number, currency?: string): string;
export declare function splitByRegex(str: string, regex: RegExp): string[];
export declare function maskString(str: string, start: number, end: number, maskChar?: string): string;
export declare function removeDuplicateWords(str: string): string;
