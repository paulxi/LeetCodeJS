const ListNode = require('./ListNode');

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }

    let l3 = add(l1, l2.val);
    l3.next = addTwoNumbers(l3.next, l2.next);
    return l3;
};

/**
 * add value to node
 * @param {ListNode} node
 * @param {integer} value
 * @return {ListNode}
 */
function add(node, value) {
    if (!node) {
        return new ListNode(value);
    }
    let sum = node.val + value;
    let result = new ListNode(sum % 10);

    if (sum < 10) {
        result.next = node.next;
    } else {
        result.next= add(node.next, 1);
    }

    return result;
}

module.exports = addTwoNumbers;
