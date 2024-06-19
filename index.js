function findValueInNestedArray(arr, key, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][key] === value) {
            return arr[i];
        }
        if (Array.isArray(arr[i])) {
            const found = findValueInNestedArray(arr[i], key, value);
            if (found) {
                return found;
            }
        }
        if (typeof arr[i] === 'object') {
            const values = Object.values(arr[i]);
            for (let j = 0; j < values.length; j++) {
                if (Array.isArray(values[j])) {
                    const found = findValueInNestedArray(values[j], key, value);
                    if (found) {
                        return found;
                    }
                }
            }
        }
    }
    return null;
}

module.exports = {
    findValueInNestedArray
}