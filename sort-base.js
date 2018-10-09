function swap(arr, i, j) {
    const t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}

const data = [3, 5, 2, 1, 6, 4];

function test(fn) {
    const t = data.slice(0);
    const result = fn(t);
    if(result){
        console.log(result);
        return;
    }
    console.log(t);
}

module.exports = { test, swap };