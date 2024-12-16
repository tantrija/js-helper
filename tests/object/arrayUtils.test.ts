import * as arrayUtils from '../../src/object/arrayUtils';

test('groupByKey should group objects by a key', () => {
    const data = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 1, name: 'C' }];
    const result = arrayUtils.groupByKey(data, 'id');
    expect(result).toEqual({
        '1': [{ id: 1, name: 'A' }, { id: 1, name: 'C' }],
        '2': [{ id: 2, name: 'B' }],
    });
});

test('sortByKey should sort objects by a key', () => {
    const data = [{ id: 3 }, { id: 1 }, { id: 2 }];
    const result = arrayUtils.sortByKey(data, 'id');
    expect(result).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
});

test('uniqueByKey should return unique objects by key', () => {
    const data = [{ id: 1 }, { id: 2 }, { id: 1 }];
    const result = arrayUtils.uniqueByKey(data, 'id');
    expect(result).toEqual([{ id: 1 }, { id: 2 }]);
});

test('findDuplicatesByKey should find duplicate objects by key', () => {
    const data = [{ id: 1 }, { id: 2 }, { id: 1 }];
    const result = arrayUtils.findDuplicatesByKey(data, 'id');
    expect(result).toEqual([{ id: 1 }]);
});

test('filterByKeys should filter objects by conditions', () => {
    const data = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];
    const result = arrayUtils.filterByKeys(data, { name: 'B' });
    expect(result).toEqual([{ id: 2, name: 'B' }]);
});

test('pluckValuesByKey should extract values by key', () => {
    const data = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const result = arrayUtils.pluckValuesByKey(data, 'id');
    expect(result).toEqual([1, 2, 3]);
});
