function throttle(fn, wait = 50) {
    var time;
    return function (...args) {
        if (time) {
            if (new Date() - time < wait) {
                return; // 间隔小小于上一次执行的
            } else {
                fn.apply(this, args);
                time = new Date();
                return;
            }
        }

        if (!time) {
            fn.apply(this, args);
            time = new Date();
            return; // 第一次立即执行
        }
    }
}

function fn(a, b, c) {
    console.log(this.a, a, b, c)
}

var test = throttle(fn, 1000)
test.call({ a: 1 }, 1, 2, 3);
test.call({ a: 2 }, 1, 2, 3);
test.call({ a: 3 }, 1, 2, 3);
test.call({ a: 4 }, 1, 2, 3);

setTimeout(function () {
    test.call({ a: 5 }, 1, 2, 3);
}, 3000)
