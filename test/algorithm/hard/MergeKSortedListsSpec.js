const expect = require('chai').expect;
const ListNode = require('../../../main/algorithm/common/ListNode');
const mergeKLists = require('../../../main/algorithm/hard/MergeKSortedLists');

describe('Merge K Sorted List', function() {
    it('should return list 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6', function() {
        let l1 = new ListNode(1);
        l1.next = new ListNode(4);
        l1.next.next = new ListNode(5);

        let l2 = new ListNode(1);
        l2.next = new ListNode(3);
        l2.next.next = new ListNode(4);

        let l3 = new ListNode(2);
        l3.next = new ListNode(6);

        let result = new ListNode(1);
        result.next = new ListNode(1);
        result.next.next = new ListNode(2);
        result.next.next.next = new ListNode(3);
        result.next.next.next.next = new ListNode(4);
        result.next.next.next.next.next = new ListNode(4);
        result.next.next.next.next.next.next = new ListNode(5);
        result.next.next.next.next.next.next.next = new ListNode(6);
        expect(mergeKLists([l1, l2, l3])).to.deep.equal(result);
    });
});
