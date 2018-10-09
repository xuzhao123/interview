class SeQueue {
    constructor(length) {
        this.length = length;
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }

    enQueue(data) {
        if ((this.rear + 1) % this.length === this.front) {
            this.resize(this.length * 2);
        }
        this.queue[this.rear] = data;

        this.rear = (this.rear + 1) % this.length;
    }

    deQueue() {
        //this.queue.splice(this.front, 1);
        this.queue[this.front] = null;
        this.front = (this.front + 1) % this.length;

    }

    resize(length) {
        this.length = length;
        if (this.queue.length > this.length) {
            this.queue.length = this.length;
        }

        const q = [];

        for (let i = 0, len = this.queue.length - this.front; i < len; i++) {
            q.push(this.queue[(i + this.front) % this.length]);
        }

        this.queue = q;
        // this.queue = [...this.queue.slice(this.front),...];

        this.front = 0;
        this.rear = this.queue.length;
    }
}

var q = new SeQueue(3);
q.enQueue(1);
q.enQueue(2);
q.enQueue(3);
q.enQueue(4);

q.deQueue();
q.enQueue(5);
q.enQueue(6);
q.enQueue(7);
q.enQueue(8);
q.enQueue(9);
q.deQueue();
q.deQueue();
q.enQueue(10);

console.log(q);