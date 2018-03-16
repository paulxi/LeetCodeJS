const expect = require('chai').expect;
const twoSum = require('../../../main/algorithm/easy/TwoSum');

describe('Two Sum', function() {
    it('should return 2 numbers', function() {
        expect(twoSum([2, 7, 11, 15], 9)).to.deep.equal([0, 1]);
    });

    it('should return empty array when nums is an empty array', function() {
        expect(twoSum([], 9)).to.deep.equal([]);
    });

    it('should return empty array when result could not be found', function() {
        expect(twoSum([2, 11, 15], 9)).to.deep.equal([]);
    });
});
