import { getMonthName } from '../../src/date/formatting';

test('getMonthName should return the correct month name', () => {
    expect(getMonthName(new Date('2024-01-01'))).toBe('January');
});
