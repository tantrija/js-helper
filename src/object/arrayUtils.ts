export function groupByKey<T extends object>(array: T[], key: keyof T): Record<string, T[]> {
    return array.reduce((acc, item) => {
        const groupKey = String(item[key]);
        acc[groupKey] = acc[groupKey] || [];
        acc[groupKey].push(item);
        return acc;
    }, {} as Record<string, T[]>);
}

export function sortByKey<T extends object>(array: T[], key: keyof T, ascending: boolean = true): T[] {
    return [...array].sort((a, b) => {
        const valueA = a[key];
        const valueB = b[key];
        if (valueA < valueB) return ascending ? -1 : 1;
        if (valueA > valueB) return ascending ? 1 : -1;
        return 0;
    });
}

export function uniqueByKey<T extends object>(array: T[], key: keyof T): T[] {
    const seen = new Set();
    return array.filter((item) => {
        const value = item[key];
        if (seen.has(value)) return false;
        seen.add(value);
        return true;
    });
}

export function findDuplicatesByKey<T extends object>(array: T[], key: keyof T): T[] {
    const seen = new Set();
    const duplicates: T[] = [];
    array.forEach((item) => {
        const value = item[key];
        if (seen.has(value)) {
            duplicates.push(item);
        } else {
            seen.add(value);
        }
    });
    return duplicates;
}

export function filterByKeys<T extends object>(
    array: T[],
    conditions: Partial<T>
): T[] {
    return array.filter((item) =>
        Object.entries(conditions).every(([key, value]) => item[key as keyof T] === value)
    );
}

export function pluckValuesByKey<T extends object, K extends keyof T>(
    array: T[],
    key: K
): T[K][] {
    return array.map((item) => item[key]);
}
