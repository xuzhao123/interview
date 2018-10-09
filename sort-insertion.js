const swap = require('./sort-base').swap;
const test = require('./sort-base').test;

function insertion(arr) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                swap(arr, j, j - 1);
            }
        }
    }
}

test(insertion);