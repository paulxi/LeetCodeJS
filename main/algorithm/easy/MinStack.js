class MinStack {
    constructor() {
        this.min = 0;
        this.stack = [];
    }

    push(x) {
        if (this.stack.length === 0) {
            this.stack.push(0);
            this.min = x;
        } else {
            this.stack.push(x - this.min);
            if (x < this.min) {
                this.min = x;
            }
        }
    }

    pop() {
        if (this.stack.length === 0) {
            return;
        }
        const pop = this.stack.pop();
        if (pop < 0) {
            this.min -= pop;
        }
    }

    top() {
        const top = this.stack[this.stack.length - 1];
        if (top > 0) {
            return top + this.min;
        } else {
            return this.min;
        }
    }

    getMin() {
        return this.min;
    }
}

module.exports = MinStack;