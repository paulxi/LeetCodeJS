const expect = require('chai').expect;
const ListNode = require('../../../main/algorithm/common/ListNode');
const detectCycle = require('../../../main/algorithm/medium/LinkedListCycleII');

describe('Linked List Cycle', function() {
    it('1->2->3->4->5->NULL should return null', function() {
        const listNode = new ListNode(1);
        listNode.next = new ListNode(2);
        listNode.next.next = new ListNode(3);
        listNode.next.next.next = new ListNode(4);
        listNode.next.next.next.next = new ListNode(5);

        expect(detectCycle(listNode)).to.be.null;
    });

    it('1->2->3->4->2 should return 2', function() {
        const listNode = new ListNode(1);
        listNode.next = new ListNode(2);
        listNode.next.next = new ListNode(3);
        listNode.next.next.next = new ListNode(4);
        listNode.next.next.next.next = listNode.next;

        expect(detectCycle(listNode) === listNode.next).to.equal(true);
    });
});