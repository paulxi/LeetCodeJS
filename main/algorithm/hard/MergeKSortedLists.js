const mergeKLists = function (lists) {
    const map = lists.reduce((accu, node) => {
        while (node) {
            const arr = accu.get(node.val);
            if (arr) {
                arr[arr.length - 1].next = node;
                arr.push(node);
            } else {
                accu.set(node.val, [node]);
            }
            node = node.next;
        }

        return accu;
    }, new Map());

    const sortedKeys = Array.from(map.keys()).sort();
    let head = null;
    if (sortedKeys.length > 0) {
        head = map.get(sortedKeys[0])[0];

        sortedKeys.reduce((last, key) => {
            const nodes = map.get(key);
            if (last) {
                last.next = nodes[0];
            }
            return nodes[nodes.length - 1];
        }, null);
    }

    return head;
};

module.exports = mergeKLists;