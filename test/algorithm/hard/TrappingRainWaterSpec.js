const expect = require('chai').expect;
const trap = require('../../../main/algorithm/hard/TrappingRainWater');

describe('Trapping Rain Water', function() {
    it('case 1', function() {
        expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).to.equal(6);
    });
});
