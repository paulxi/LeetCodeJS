const expect = require('chai').expect;
const search =
    require('../../../main/algorithm/medium/SearchInRotatedSortedArray');

describe('Search in Rotated Sorted Array', function() {
    it('nums = [4, 5, 6, 7, 0, 1, 2], target = 0 should return 4', function() {
        expect(search([4, 5, 6, 7, 0, 1, 2], 0)).to.equal(4);
    });

    it('nums = [4, 5, 6, 7, 0, 1, 2], target = 3 should return -1', function() {
        expect(search([4, 5, 6, 7, 0, 1, 2], 3)).to.equal(-1);
    });
});