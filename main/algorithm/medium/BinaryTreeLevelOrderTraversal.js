const levelOrder = function(root) {
    if (!root) {
        return [];
    }

    const result = [];
    const queue = [];
    queue.push(root);
    while (queue.length !== 0) {
        const subList = [];
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            subList.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }

        result.push(subList);
    }

    return result;
};

module.exports = levelOrder;