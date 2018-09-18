const expect = require('chai').expect;
const reverseInteger = require('../../../main/algorithm/easy/ReverseInteger');

describe('Reverse Integer', function() {
    it('123 should return 321', function() {
        expect(reverseInteger(123)).to.deep.equal(321);
    });

    it('-123 should return -321', function() {
        expect(reverseInteger(-123)).to.deep.equal(-321);
    });

    it('120 should return 21', function() {
        expect(reverseInteger(120)).to.deep.equal(21);
    });

    it('1534236469 should return 0', function() {
        expect(reverseInteger(1534236469)).to.deep.equal(0);
    });
});
