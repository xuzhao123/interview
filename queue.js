class Queue {
    constructor() {
        this.queue = [];
    }

    enQueue(data) {
        this.queue.push(data);
    }

    deQueue() {
        this.queue.shift();
    }

    getHeader() {
        return this.queue[0];
    }

    getLength() {
        return this.queue.length;
    }

    isEmpty() {
        return this.getLength() === 0;
    }
}

var q = new Queue();
q.enQueue(1);
q.enQueue(2);
q.enQueue(3);

q.deQueue();

console.log(q.getHeader());