import { add, subtract, multiply, divide, modulus, increment, decrement, square, cube, power, sqrt, cbrt } from '../../src/number/basic';

test('add', () => {
    expect(add(3, 4)).toBe(7);
});

test('subtract', () => {
    expect(subtract(10, 4)).toBe(6);
});

test('multiply', () => {
    expect(multiply(3, 5)).toBe(15);
});

test('divide', () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(10, 0)).toBeNaN();
});

test('modulus', () => {
    expect(modulus(10, 3)).toBe(1);
});

test('increment', () => {
    expect(increment(7)).toBe(8);
});

test('decrement', () => {
    expect(decrement(7)).toBe(6);
});

test('square', () => {
    expect(square(5)).toBe(25);
});

test('cube', () => {
    expect(cube(2)).toBe(8);
});

test('power', () => {
    expect(power(2, 3)).toBe(8);
});

test('sqrt', () => {
    expect(sqrt(16)).toBe(4);
});

test('cbrt', () => {
    expect(cbrt(27)).toBe(3);
});
