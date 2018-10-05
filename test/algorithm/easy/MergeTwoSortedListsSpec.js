const expect = require('chai').expect;
const ListNode = require('../../../main/algorithm/common/ListNode');
const mergeTwoLists = require('../../../main/algorithm/easy/MergeTwoSortedLists');

describe('Merge Two Sorted Lists', function() {
    it('1->2->4 and 1->3->4 should return 1->1->2->3->4->4', function() {
        const l1 = new ListNode(1);
        l1.next = new ListNode(2);
        l1.next.next = new ListNode(4);

        const l2 = new ListNode(1);
        l2.next = new ListNode(3);
        l2.next.next = new ListNode(4);

        const expected = new ListNode(1);
        expected.next = new ListNode(1);
        expected.next.next = new ListNode(2);
        expected.next.next.next = new ListNode(3);
        expected.next.next.next.next = new ListNode(4);
        expected.next.next.next.next.next = new ListNode(4);

        expect(mergeTwoLists(l1, l2)).to.deep.equal(expected);
    });
});