export const toBinary = (num: number): string => num.toString(2);
export const toHex = (num: number): string => num.toString(16);
export const toOctal = (num: number): string => num.toString(8);
export const fromBinary = (binary: string): number => parseInt(binary, 2);
export const fromHex = (hex: string): number => parseInt(hex, 16);
export const fromOctal = (octal: string): number => parseInt(octal, 8);
