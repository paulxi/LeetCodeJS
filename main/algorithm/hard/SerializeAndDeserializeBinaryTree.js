const TreeNode = require('../common/TreeNode');

const serialize = function(root) {
    if (!root) {
        return '[null]'
    }

    const result = rserialize(root, '');
    return '[' + result.substring(0, result.length - 1) + ']'
};

const rserialize = function(root, str) {
    if (!root) {
        return str + "null,"
    }

    let result = str + root.val + ',';
    result = rserialize(root.left, result);
    result = rserialize(root.right, result);

    return result;
};

const deserialize = function(data) {
    if (!data) {
        return null;
    }

    let str = data.substring(1, data.length - 1);
    let list = str.split(',');

    return rdeserialize(list);
};

const rdeserialize = function(list) {
    const first = list.shift();
    if (first === 'null') {
        return null;
    }

    const node = new TreeNode(Number(first));
    node.left = rdeserialize(list);
    node.right = rdeserialize(list);

    return node;
};

module.exports = {serialize, deserialize};