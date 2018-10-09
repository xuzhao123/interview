Function.prototype.apply = function (context, array = []) {
    context = context || global;
    const symbol = Symbol('apply');
    context[symbol] = this;
    const result = context[symbol](...array);
    delete context[symbol];
    return result;
};

function fn(a) {
    console.log(this.a, a);
    return this;
}

var context = { a: 2 };
fn.apply(context);
console.log(context);