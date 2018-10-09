class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    addNodes(values) {
        values.forEach((v) => {
            this.addNode(v);
        });
    }

    addNode(value) {
        this.root = this._add(this.root, value);
    }

    _add(node, value) {
        if (!node) {
            return new Node(value);
        }

        if (node.value > value) {
            node.left = this._add(node.left, value);
        }

        else if (node.value < value) {
            node.right = this._add(node.right, value);
        }
        return node;
    }

    // 先序遍历
    preorderTraversal(node) {
        if (!node) {
            node = this.root;
        }

        console.log(node.value);
        node.left && this.preorderTraversal(node.left)
        node.right && this.preorderTraversal(node.right);
    }

    // 中序遍历
    midorderTraversal(node) {
        if (!node) {
            node = this.root;
        }

        node.left && this.midorderTraversal(node.left);
        console.log(node.value);
        node.right && this.midorderTraversal(node.right);
    }

    // 中序遍历
    postorderTraversal(node) {
        if (!node) {
            node = this.root;
        }

        node.left && this.postorderTraversal(node.left);
        node.right && this.postorderTraversal(node.right);
        console.log(node.value);
    }

    // 广度遍历
    breadthTraversal(node) {
        if (!node) {
            node = this.root;
        }

        var arr = [this.root];

        while (arr.length > 0) {
            arr[0].left && arr.push(arr[0].left);
            arr[0].right && arr.push(arr[0].right);
            console.log(arr[0].value);
            arr.shift();
        }
    }

    getMin(node) {
        if (!node) {
            node = this.root;
        }

        while (node.left) {
            node = node.left;
        }

        return node.value;
    }

    getMax(node) {
        if (!node) {
            node = this.root;
        }

        while (node.right) {
            node = node.right;
        }

        return node.value;
    }
}


const bst = new BST();

bst.addNodes([5, 2, 6, 1, 4, 3, 7]);

console.log(JSON.stringify(bst, null, 2))
bst.preorderTraversal()
console.log('-----------')
bst.midorderTraversal()
console.log('-----------')
bst.postorderTraversal()
console.log('-----------')
bst.breadthTraversal();
console.log('-----------')
console.log(bst.getMin());
console.log('-----------')
console.log(bst.getMax());