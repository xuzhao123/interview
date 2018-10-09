Function.prototype.call = function (context, ...args) {
    context = context || global;
    const symbol = Symbol('call');
    context[symbol] = this;
    const result = context[symbol](...args);
    delete context[symbol];
    return result;
}

function fn(a) {
    console.log(this.a, a);
    return this;
}

var context = { a: 2 };
fn.call(context, 1);
console.log(context);