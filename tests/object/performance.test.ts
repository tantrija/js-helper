import * as performance from '../../src/object/performance';

jest.useFakeTimers();

test('debounceObjectUpdates should debounce updates', () => {
    const mockUpdate = jest.fn();
    const debouncedUpdate = performance.debounceObjectUpdates(mockUpdate, 100);

    debouncedUpdate({ a: 1 });
    debouncedUpdate({ a: 2 });

    expect(mockUpdate).not.toBeCalled();
    jest.advanceTimersByTime(100);
    expect(mockUpdate).toBeCalledTimes(1);
    expect(mockUpdate).toBeCalledWith({ a: 2 });
});

test('memoizeObject should cache results for the same input', () => {
    const mockFn = jest.fn((obj) => Object.keys(obj).length);
    const memoizedFn = performance.memoizeObject(mockFn);

    expect(memoizedFn({ a: 1 })).toBe(1);
    expect(memoizedFn({ a: 1 })).toBe(1); // Cached
    expect(mockFn).toBeCalledTimes(1);
});
