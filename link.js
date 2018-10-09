class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class Link {
    constructor() {
        this.head = new Node(null, null);
    }

    insertHead(data) {
        const node = new Node(data);
        node.next = this.head.next;
        this.head.next = node;
    }

    insertTail(data) {
        const node = new Node(data);
        let cur = this.head;
        while (cur.next != null) {
            cur = cur.next;
        }
        cur.next = node;
    }

    getLength() {
        let cur = this.head;
        let n = 0;
        while (cur != null) {
            n++;
            cur = cur.next;
        }
        return n;
    }

    insert(data, index) {
        const length = this.getLength();
        if (index > length - 1) {
            index = length - 1;
        }

        let n = 0;
        let cur = this.head;
        while (n < index) {
            n++;
            cur = cur.next;
        }

        const node = new Node(data);
        const next = cur.next;
        cur.next = node;
        node.next = next;
    }

    print() {
        let cur = this.head;
        let text = '';
        while (cur) {
            text += '=>' + cur.value;
            cur = cur.next;
        }
        console.log(text);
    }

    removeNode(index) {
        if (index === 0) {
            return;
        }
        const length = this.getLength();
        if (index > length - 1) {
            return;
        }

        let cur = this.head;
        let n = 0;
        while (n < index - 1) {
            cur = cur.next;
            n++;
        }
        cur.next = cur.next ? (cur.next.next ? cur.next.next : null) : null;
    }
}

const l = new Link();
l.insertTail(1)
l.insertTail(2)
l.insertTail(3)

l.insertHead(0);

l.insert('insert', 5)

l.removeNode(6);

l.print();
console.log(l.getLength());