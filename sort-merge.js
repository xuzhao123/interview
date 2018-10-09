const test = require('./sort-base').test;

function mergeSort(arr) {
    merge(arr, 0, arr.length - 1);
}

test(mergeSort);

function merge(arr, left, right) {
    if (left === right) {
        return;
    }

    const mid = left + Math.floor((right - left) / 2);

    merge(arr, left, mid);
    merge(arr, mid + 1, right);

    const t = [];

    let p1 = left;
    let p2 = mid + 1;

    while (p1 < mid + 1 && p2 <= right) {
        if (arr[p1] < arr[p2]) {
            t.push(arr[p1]);
            p1++;
        } else {
            t.push(arr[p2]);
            p2++;
        }
    }

    while (p1 < mid + 1) {
        t.push(arr[p1]);
        p1++;
    }

    while (p2 < right) {
        t.push(arr[p2]);
        p2++;
    }

    for (let i = 0, len = t.length; i < len; i++) {
        arr[left + i] = t[i];
    }
}