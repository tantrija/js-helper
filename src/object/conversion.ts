/* eslint-disable  @typescript-eslint/no-explicit-any */

export function toObject(entries: [string, any][]): Record<string, any> {
    return Object.fromEntries(entries);
}

export function fromEntries(entries: [string, any][]): Record<string, any> {
    return Object.fromEntries(entries);
}

export function objectToQueryString(obj: Record<string, any>): string {
    return Object.entries(obj)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
}

export function queryStringToObject(queryString: string): Record<string, any> {
    return Object.fromEntries(
        queryString
            .replace(/^\?/, '')
            .split('&')
            .map((param) => param.split('=').map(decodeURIComponent))
    );
}
