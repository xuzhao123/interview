function flatten(arr) {
    if (Array.isArray(arr)) {
        return arr.reduce((a, b) => {
            return [...a, ...flatten(b)]
        }, [])
    } else {
        return [arr];
    }
}

console.log(flatten([1, [2, [3, [4]]], 5]))