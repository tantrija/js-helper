export function randomElement<T>(array: T[]): T | undefined {
    return array[Math.floor(Math.random() * array.length)];
}

export function randomElements<T>(array: T[], count: number): T[] {
    const result: T[] = [];
    const copy = [...array];
    for (let i = 0; i < count && copy.length > 0; i++) {
        const index = Math.floor(Math.random() * copy.length);
        result.push(copy.splice(index, 1)[0]);
    }
    return result;
}

export function randomShuffle<T>(array: T[]): T[] {
    return array
        .map((item) => ({ item, sortKey: Math.random() }))
        .sort((a, b) => a.sortKey - b.sortKey)
        .map(({ item }) => item);
}
