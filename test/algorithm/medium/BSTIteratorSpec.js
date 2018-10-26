const expect = require('chai').expect;
const TreeNode = require('../../../main/algorithm/common/TreeNode');
const BSTIterator =
    require('../../../main/algorithm/medium/BSTIterator');

describe('Binary Search Tree Iterator', function() {
    it('BST should return [3, 5, 7, 10, 12, 15, 17]', function() {
        let values = [];
        const root = new TreeNode(10);
        root.left = new TreeNode(5);
        root.right = new TreeNode(15);
        root.left.left = new TreeNode(3);
        root.left.right = new TreeNode(7);
        root.right.left = new TreeNode(12);
        root.right.right = new TreeNode(17);
        const iterator = new BSTIterator(root);
        while (iterator.hasNext()) {
            values.push(iterator.next());
        }

        expect(values).to.deep.equal([3, 5, 7, 10, 12, 15, 17]);
    });
});