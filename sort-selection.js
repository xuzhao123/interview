const swap = require('./sort-base').swap;
const test = require('./sort-base').test;

function selection(arr) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        let min = i;
        for (let j = i + 1; j < length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        swap(arr, i, min);
    }
}

test(selection);