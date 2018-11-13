class PriorityQueue {
    constructor(comparator) {
        this.comparator = comparator;
        this.heap = [];
    }

    get length() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    peek() {
        return this.heap[0];
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.swapAt(0, this.heap.length - 1);
        const value = this.heap.pop();
        this.sink(0);
        return value;
    }

    push(value) {
        this.heap.push(value);
        this.swim(this.heap.length - 1);
    }

    sink(index) {
        let idx = index;
        while (2 * idx + 1 < this.heap.length) {
            const leftChildIndex = 2 * idx + 1;
            let first = idx;
            if (leftChildIndex < this.heap.length && this.comparator(this.heap[leftChildIndex], this.heap[first]) < 0) {
                first = leftChildIndex;
            }

            const rightChildIndex = leftChildIndex + 1;
            if (rightChildIndex < this.heap.length && this.comparator(this.heap[rightChildIndex], this.heap[first]) < 0) {
                first = rightChildIndex;
            }

            if (idx === first) {
                break;
            }

            this.swapAt(idx, first);
            idx = first;
        }
    }

    swim(index) {
        let idx = index;
        let parentIndex = Math.floor((idx - 1) / 2);
        while (idx > 0 && this.comparator(this.heap[idx], this.heap[parentIndex]) < 0) {
            this.swapAt(parentIndex, idx);
            idx = parentIndex;
            parentIndex = Math.floor((idx - 1) / 2);
        }
    }

    swapAt(from, to) {
        const temp = this.heap[from];
        this.heap[from] = this.heap[to];
        this.heap[to] = temp;
    }
}

module.exports = PriorityQueue;