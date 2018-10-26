class BSTIterator {
    constructor(root) {
        this.root = root;
        this.stack = [];
        this._pushLeftChildren(this.root);
    }

    hasNext() {
        return this.stack.length > 0;
    }

    next() {
        if (this.stack.length === 0) {
            return null;
        }
        const node = this.stack.pop();
        this._pushLeftChildren(node.right);

        return node.val;
    }

    _pushLeftChildren(node) {
        let cur = node;
        while (cur) {
            this.stack.push(cur);
            cur = cur.left;
        }
    }
}

module.exports = BSTIterator;