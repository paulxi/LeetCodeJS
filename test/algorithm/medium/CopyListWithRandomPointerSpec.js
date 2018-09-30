const expect = require('chai').expect;
const RandomListNode = require('../../../main/algorithm/common/RandomListNode');
const copyRandomList =
    require('../../../main/algorithm/medium/CopyListWithRandomPointer');

describe('Copy List with Random Pointer', function() {
    it('test case 1 should return work', function() {
        let l1 = new RandomListNode(4);
        let l2 = new RandomListNode(7);
        let l3 = new RandomListNode(-2);
        l1.next = l2;
        l2.next = l3;
        l1.random = l3;
        l2.random = l1;

        let copyl1 = copyRandomList(l1);
        let copyl2 = copyl1.next;
        let copyl3 = copyl2.next;

        expect(l1.label).to.equal(copyl1.label);
        expect(l2.label).to.equal(copyl2.label);
        expect(l3.label).to.equal(copyl3.label);
        expect(copyl3).to.equal(copyl1.random);
        expect(copyl1).to.equal(copyl2.random);
    });
});
