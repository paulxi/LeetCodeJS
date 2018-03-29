const expect = require('chai').expect;
const findMedianSortedArrays
    = require('../../../main/algorithm/hard/MedianOfTwoSortedArrays');

describe('Median of Two Sorted Arrays', function() {
    it('case 1', function() {
        expect(findMedianSortedArrays([1, 3], [2])).to.equal(2.0);
    });

    it('case 2', function() {
        expect(findMedianSortedArrays([1, 2], [3, 4])).to.equal(2.5);
    });

    it('case 3', function() {
        expect(findMedianSortedArrays([3, 4], [1, 2])).to.equal(2.5);
    });

    it('case 4', function() {
        expect(findMedianSortedArrays([1, 2, 3], [4, 5])).to.equal(3.0);
    });

    it('case 5', function() {
        expect(findMedianSortedArrays([4, 5], [1, 2, 3])).to.equal(3.0);
    });

    it('case 6', function() {
        expect(findMedianSortedArrays([], [1])).to.equal(1.0);
    });

    it('case 7', function() {
        expect(findMedianSortedArrays([], [])).to.equal(0.0);
    });
});
