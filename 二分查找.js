function search(min, max, value) {
    const mid = Math.floor((max - min) / 2) + min;
    if (mid > value) {
        search(min, mid - 1, value);
    } else if (mid < value) {
        search(mid + 1, max, value);
    } else {
        console.log(mid);
    }
}

search(0, 100, 90);