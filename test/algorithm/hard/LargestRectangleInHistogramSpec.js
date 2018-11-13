const expect = require('chai').expect;
const largestRectangleArea
    = require('../../../main/algorithm/hard/LargestRectangleInHistogram');

describe('Largest Rectangle in Histogram', function() {
    it('[2,1,5,6,2,3] should return 10', function() {
        expect(largestRectangleArea([2,1,5,6,2,3])).to.equal(10);
    });

    it('[0, 0, 0, 0, 0, 0, 0, 0, 2147483647] should return 2147483647', function() {
        expect(largestRectangleArea([0, 0, 0, 0, 0, 0, 0, 0, 2147483647])).to.equal(2147483647);
    });
});