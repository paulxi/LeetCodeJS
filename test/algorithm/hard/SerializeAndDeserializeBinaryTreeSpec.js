const expect = require('chai').expect;
const TreeNode = require('../../../main/algorithm/common/TreeNode');
const {serialize, deserialize}
    = require('../../../main/algorithm/hard/SerializeAndDeserializeBinaryTree');

describe('Serialize and Deserialize Binary Tree', function() {
    it('case 1', function() {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(5);
        root.left.left = new TreeNode(3);
        root.left.right = new TreeNode(4);

        const serializedStr = serialize(root);
        expect(serializedStr).to.equal('[1,2,3,null,null,4,null,null,5,null,null]');
        expect(serialize(deserialize(serializedStr))).to.equal('[1,2,3,null,null,4,null,null,5,null,null]');
    });
});