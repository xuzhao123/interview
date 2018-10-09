var x = {
    [Symbol.iterator]() {
        let n = 0;
        return {
            [Symbol.iterator]() {
                return this;
            },
            next() {
                n++;
                return n > 10 ? { done: true } : { value: n, done: false }
            }
        }

    }
}
var n = 0;

var x = {
    [Symbol.iterator]() {
        return this;
    },
    next() {
        n++;
        return n > 10 ? { done: true } : { value: n, done: false }
    }
}

for (var key of x) {
    console.log(key)
}