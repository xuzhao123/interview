const test = require('./sort-base').test;

function quick(arr) {
    if (arr.length < 2) {
        return arr;
    }

    const len = arr.length;
    const mid = Math.floor(len / 2);

    const left = [];
    const right = [];
    for (let i = 0; i < len; i++) {
        if (arr[i] < arr[mid]) {
            left.push(arr[i]);
        } else if (arr[i] > arr[mid]) {
            right.push(arr[i]);
        }
    }

    return [...quick(left), arr[mid], ...quick(right)]
}

test(quick);