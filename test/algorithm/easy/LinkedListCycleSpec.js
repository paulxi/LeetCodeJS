const expect = require('chai').expect;
const ListNode = require('../../../main/algorithm/common/ListNode');
const reverseList = require('../../../main/algorithm/easy/LinkedListCycle');

describe('Linked List Cycle', function() {
    it('1->2->3->4->5->NULL should return false', function() {
        const listNode = new ListNode(1);
        listNode.next = new ListNode(2);
        listNode.next.next = new ListNode(3);
        listNode.next.next.next = new ListNode(4);
        listNode.next.next.next.next = new ListNode(5);

        expect(reverseList(listNode)).to.equal(false);
    });

    it('1->2->3->4->1 should return true', function() {
        const listNode = new ListNode(1);
        listNode.next = new ListNode(2);
        listNode.next.next = new ListNode(3);
        listNode.next.next.next = new ListNode(4);
        listNode.next.next.next.next = listNode;

        expect(reverseList(listNode)).to.equal(true);
    });
});