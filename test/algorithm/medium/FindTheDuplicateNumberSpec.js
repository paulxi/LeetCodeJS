const expect = require('chai').expect;
const findDuplicate =
    require('../../../main/algorithm/medium/FindTheDuplicateNumber');

describe('Find the Duplicate Number', function() {
    it('[1,3,4,2,2] should return 2', function() {
        expect(findDuplicate([1, 3, 4, 2, 2])).to.equal(2);
    });

    it('[3,1,3,4,2] should return 3', function() {
        expect(findDuplicate([3, 1, 3, 4, 2])).to.equal(3);
    });
});