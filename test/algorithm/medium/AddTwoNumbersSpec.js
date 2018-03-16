const expect = require('chai').expect;
const ListNode = require('../../../main/algorithm/medium/ListNode');
const addTwoNumbers = require('../../../main/algorithm/medium/addTwoNumbers');

describe('Add Two Numbers', function() {
    it('should return list 7 -> 0 -> 8', function() {
        let l1 = new ListNode(2);
        l1.next = new ListNode(4);
        l1.next.next = new ListNode(3);

        let l2 = new ListNode(5);
        l2.next = new ListNode(6);
        l2.next.next = new ListNode(4);

        let result = new ListNode(7);
        result.next = new ListNode(0);
        result.next.next = new ListNode(8);
        expect(addTwoNumbers(l1, l2)).to.deep.equal(result);
    });

    it('should return list 9', function() {
        let l1 = new ListNode(8);
        let l2 = new ListNode(1);

        let result = new ListNode(9);

        expect(addTwoNumbers(l1, l2)).to.deep.equal(result);
    });

    it('should return list 0 -> 1', function() {
        let l1 = new ListNode(9);
        let l2 = new ListNode(1);

        let result = new ListNode(0);
        result.next = new ListNode(1);

        expect(addTwoNumbers(l1, l2)).to.deep.equal(result);
    });

    it('should return list 0 -> 0 -> 1', function() {
        let l1 = new ListNode(9);
        l1.next = new ListNode(9);

        let l2 = new ListNode(1);

        let result = new ListNode(0);
        result.next = new ListNode(0);
        result.next.next = new ListNode(1);

        expect(addTwoNumbers(l1, l2)).to.deep.equal(result);
    });
});
