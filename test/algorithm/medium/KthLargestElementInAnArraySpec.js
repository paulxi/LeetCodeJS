const expect = require('chai').expect;
const findKthLargest =
    require('../../../main/algorithm/medium/KthLargestElementInAnArray');

describe('Kth Largest Element in an Array', function () {
    it('[3,2,1,5,6,4] and k = 2 should return 5', function () {
        expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).to.equal(5);
    });

    it('[3,2,3,1,2,4,5,5,6] and k = 4 should return 4', function () {
        expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).to.equal(4);
    });
});