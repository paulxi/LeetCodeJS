const expect = require('chai').expect;
const TreeNode =
    require('../../../main/algorithm/common/TreeNode');
const levelOrder =
    require('../../../main/algorithm/medium/BinaryTreeLevelOrderTraversal');

describe('Binary Tree Level Order Traversal', function () {
    it('[3,9,20,null,null,15,7] should return [[3],[9,20],[15,7]]', function () {
        const root = new TreeNode(3);
        root.left = new TreeNode(9);
        root.right = new TreeNode(20);
        root.right.left = new TreeNode(15);
        root.right.right = new TreeNode(7);
        expect(levelOrder(root)).to.deep.equal([[3], [9, 20], [15, 7]]);
    });
});