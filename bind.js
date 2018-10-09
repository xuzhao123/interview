Function.prototype.bind = function (context, ...args1) {
    const fn = this;
    return function f(...args2) {
        if (this instanceof f) {
            return new fn(...args1, ...args2);
        }
        fn.apply(context, [...args1, ...args2])
    }
}

function fn(a, b, c, d) {
    console.log(this.a, a, b, c, d);
    return this;
}

var context = { a: 2 };
var bindFn = fn.bind(context, 1, 2);

new bindFn(3, 4)