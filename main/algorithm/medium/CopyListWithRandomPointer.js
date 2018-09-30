const RandomListNode = require('../../../main/algorithm/common/RandomListNode');

const copyRandomList = function(head) {
    if (head == null) {
        return null;
    }

    const visitedNodes = new Map();
    let oldNode = head;
    let newNode = new RandomListNode(head.label);
    visitedNodes.set(oldNode, newNode);

    while (oldNode) {
        newNode.random = getClonedNode(visitedNodes, oldNode.random);
        newNode.next = getClonedNode(visitedNodes, oldNode.next);

        oldNode = oldNode.next;
        newNode = newNode.next;
    }

    return visitedNodes.get(head);
};

const getClonedNode = function(visitedNodes, node) {
    if (node == null) {
        return null;
    }

    let clonedNode = visitedNodes.get(node);
    if (clonedNode) {
        return clonedNode;
    }

    clonedNode = new RandomListNode(node.label);
    visitedNodes.set(node, clonedNode);
    return clonedNode;
};

module.exports = copyRandomList;
