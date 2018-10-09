class Stack {
    constructor() {
        this.stack = [];
    }

    push(data) {
        this.stack.push(data);
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    getCount() {
        return this.stack.length;
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}

var s = new Stack();

s.push(1);
s.push(2);
s.push(3);

console.log(s.pop());