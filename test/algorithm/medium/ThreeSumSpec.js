const expect = require('chai').expect;
const threeSum = require('../../../main/algorithm/medium/ThreeSum');

describe('Three Sum', function() {
    it('case 1', function() {
        const result = threeSum([-1, 0, 1, 2, -1, -4]);
        let expected = [[-1, -1, 2], [-1, 0, 1]];
        expect(new Set(result)).to.deep.equal(new Set(expected));
    });
});
