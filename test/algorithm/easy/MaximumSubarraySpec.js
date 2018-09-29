const expect = require('chai').expect;
const maxSubArray = require('../../../main/algorithm/easy/MaximumSubarray');

describe('Maximum Subarray', function() {
    it('[-2, 1, -3, 4, -1, 2, 1, -5, 4] should return 6', function() {
        expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).to.equal(6);
    });

    it('[1] should return 1', function() {
        expect(maxSubArray([1])).to.equal(1);
    });

    it('[-2, -1] should return -1 should return -1', function() {
        expect(maxSubArray([-2, -1])).to.equal(-1);
    });
});