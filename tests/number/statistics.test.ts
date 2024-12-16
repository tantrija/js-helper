import { min, max, average, sum, median, mode, range, variance, standardDeviation } from '../../src/number/statistics';

test('min', () => {
    expect(min(4, 2, 8, 1)).toBe(1);
});

test('max', () => {
    expect(max(4, 2, 8, 1)).toBe(8);
});

test('average', () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
});

test('sum', () => {
    expect(sum([1, 2, 3, 4, 5])).toBe(15);
});

test('median', () => {
    expect(median([1, 2, 3, 4, 5])).toBe(3);
    expect(median([1, 2, 3, 4])).toBe(2.5);
});

test('mode', () => {
    expect(mode([1, 2, 2, 3, 4, 4, 4])).toEqual([4]);
});

test('range', () => {
    expect(range([1, 2, 3, 4, 5])).toBe(4);
});

test('variance', () => {
    expect(variance([1, 2, 3, 4, 5])).toBe(2);
});

test('standardDeviation', () => {
    expect(standardDeviation([1, 2, 3, 4, 5])).toBeCloseTo(1.414, 3);
});
