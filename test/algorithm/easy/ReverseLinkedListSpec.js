const expect = require('chai').expect;
const ListNode = require('../../../main/algorithm/common/ListNode');
const reverseList = require('../../../main/algorithm/easy/ReverseLinkedList');

describe('Reverse Linked List', function() {
    it('1->2->3->4->5->NULL should return 5->4->3->2->1->NULL', function() {
        const listNode = new ListNode(1);
        listNode.next = new ListNode(2);
        listNode.next.next = new ListNode(3);
        listNode.next.next.next = new ListNode(4);
        listNode.next.next.next.next = new ListNode(5);

        const expected = new ListNode(5);
        expected.next = new ListNode(4);
        expected.next.next = new ListNode(3);
        expected.next.next.next = new ListNode(2);
        expected.next.next.next.next = new ListNode(1);

        expect(reverseList(listNode)).to.deep.equal(expected);
    });
});