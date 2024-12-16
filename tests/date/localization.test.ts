import {
    toLocaleDateString,
    toLocaleTimeString,
    toLocaleString,
    formatToTimeZone,
} from '../../src/date/localization';

test('toLocaleDateString formats date correctly', () => {
    const date = new Date('2024-01-01');
    expect(toLocaleDateString(date, 'en-US')).toBe('1/1/2024');
});

test('toLocaleTimeString formats time correctly', () => {
    const date = new Date('2024-01-01T12:00:00');
    expect(toLocaleTimeString(date, 'en-US')).toContain('12:00:00');
});

test('toLocaleString formats date and time correctly', () => {
    const date = new Date('2024-01-01T12:00:00');
    expect(toLocaleString(date, 'en-US')).toContain('1/1/2024');
});

test('formatToTimeZone formats correctly to a given timezone', () => {
    const date = new Date('2024-01-01T12:00:00Z');
    expect(formatToTimeZone(date, 'Asia/Kolkata')).toBeTruthy(); // Adjust as per locale
});
