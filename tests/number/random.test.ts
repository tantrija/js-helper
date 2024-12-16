import { random, randomInRange, randomInteger, shuffleArray } from '../../src/number/random';

test('random', () => {
    const value = random();
    expect(value).toBeGreaterThanOrEqual(0);
    expect(value).toBeLessThan(1);
});

test('randomInRange', () => {
    const value = randomInRange(5, 10);
    expect(value).toBeGreaterThanOrEqual(5);
    expect(value).toBeLessThan(10);
});

test('randomInteger', () => {
    const value = randomInteger(5, 10);
    expect(value).toBeGreaterThanOrEqual(5);
    expect(value).toBeLessThanOrEqual(10);
    expect(Number.isInteger(value)).toBe(true);
});

test('shuffleArray', () => {
    const array = [1, 2, 3, 4, 5];
    const shuffled = shuffleArray(array);
    expect(shuffled).toHaveLength(array.length);
    expect(new Set(shuffled)).toEqual(new Set(array));
});
