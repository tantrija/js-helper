import { round, ceil, floor, toFixed, toPrecision, truncate, roundTo, clamp } from '../../src/number/rounding';

test('round', () => {
    expect(round(4.6)).toBe(5);
    expect(round(4.4)).toBe(4);
});

test('ceil', () => {
    expect(ceil(4.1)).toBe(5);
    expect(ceil(-4.9)).toBe(-4);
});

test('floor', () => {
    expect(floor(4.9)).toBe(4);
    expect(floor(-4.1)).toBe(-5);
});

test('toFixed', () => {
    expect(toFixed(4.5678, 2)).toBe('4.57');
});

test('toPrecision', () => {
    expect(toPrecision(4.5678, 3)).toBe('4.57');
});

test('truncate', () => {
    expect(truncate(4.9)).toBe(4);
});

test('roundTo', () => {
    expect(roundTo(4.5678, 2)).toBe(4.57);
});

test('clamp', () => {
    expect(clamp(5, 1, 10)).toBe(5);
    expect(clamp(15, 1, 10)).toBe(10);
    expect(clamp(-5, 1, 10)).toBe(1);
});
