import { randomElement, randomShuffle } from '../../src/array/randomization';

describe('Randomization Utilities', () => {
    test('randomElement returns a random element from the array', () => {
        const array = [1, 2, 3, 4];
        const random = randomElement(array);
        expect(array).toContain(random);
    });

    test('randomShuffle randomizes the order of elements', () => {
        const array = [1, 2, 3, 4];
        const shuffled = randomShuffle(array);
        // expect(shuffled.sort()).toEqual(array.sort()); // Same elements, different order
        expect(shuffled).not.toEqual(array); // Ensure order is changed
    });
});
