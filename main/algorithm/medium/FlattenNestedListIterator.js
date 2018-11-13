const NestedInteger = require('../common/NestedInteger');

class NestedIterator {
    constructor(nestedList) {
        this.stack = [];

        for (let i = nestedList.length - 1; i >= 0; i--) {
            this.stack.push(nestedList[i]);
        }
    }

    hasNext() {
        while (this.stack.length > 0) {
            const elem = this.stack[this.stack.length - 1];
            if (elem.isInteger()) {
                return true;
            } else {
                this.stack.pop();
                const nestedList = elem.getList();
                for (let i = nestedList.length - 1; i >= 0; i--) {
                    this.stack.push(nestedList[i]);
                }
            }
        }

        return false;
    }

    next() {
        const nestedInteger = this.stack.pop();
        return nestedInteger.getInteger();
    }
}

module.exports = NestedIterator;