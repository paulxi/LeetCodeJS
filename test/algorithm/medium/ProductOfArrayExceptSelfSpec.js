const expect = require('chai').expect;
const productExceptSelf =
    require('../../../main/algorithm/medium/ProductOfArrayExceptSelf');

describe('Product of Array Except Self', function() {
    it('[1,2,3,4] should return [24,12,8,6]', function() {
        expect(productExceptSelf([1, 2, 3, 4])).to.deep.equal([24, 12, 8, 6]);
    });
});
