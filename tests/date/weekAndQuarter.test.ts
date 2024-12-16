import { getQuarter } from '../../src/date/weekAndQuarter';

test('getQuarter should return the correct quarter', () => {
    expect(getQuarter(new Date('2024-01-01'))).toBe(1);
});
