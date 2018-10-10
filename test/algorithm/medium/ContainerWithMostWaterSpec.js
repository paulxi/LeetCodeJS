const expect = require('chai').expect;
const maxArea =
    require('../../../main/algorithm/medium/ContainerWithMostWater');

describe('Container With Most Water', function() {
    it('[1,8,6,2,5,4,8,3,7] should return 49', function() {
        expect(maxArea([1,8,6,2,5,4,8,3,7])).to.equal(49);
    });
});