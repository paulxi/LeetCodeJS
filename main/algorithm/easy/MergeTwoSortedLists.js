const ListNode = require('../common/ListNode');

const mergeTwoLists = function(l1, l2) {
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }

    const result = new ListNode(0);
    let ptr = result;
    let node1 = l1;
    let node2 = l2;

    while (node1 && node2) {
        const value = Math.min(node1.val, node2.val);
        ptr.next = new ListNode(value);
        ptr = ptr.next;

        if (node1.val < node2.val) {
            node1 = node1.next;
        } else {
            node2 = node2.next;
        }
    }

    if (node1) {
        ptr.next = node1;
    }
    if (node2) {
        ptr.next = node2;
    }

    return result.next;
};

module.exports = mergeTwoLists;
