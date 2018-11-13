const PriorityQueue = require('../common/PriorityQueue');

const findKthLargest = function(nums, k) {
    const heap = new PriorityQueue((num1, num2) => num1 - num2);
    for (let num of nums) {
        if (heap.length < k) {
            heap.push(num);
        } else {
            if (heap.peek() < num) {
                heap.push(num);
                heap.pop();
            }
        }
    }

    return heap.peek();
};

module.exports = findKthLargest;