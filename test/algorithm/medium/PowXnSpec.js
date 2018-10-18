const expect = require('chai').expect;
const myPow =
    require('../../../main/algorithm/medium/PowXn');

describe('Pow(x, n)', function() {
    it('2.00000, 10 should return 1024.00000', function() {
        expect(myPow(2.0, 10)).to.equal(1024.0);
    });

    it('2.10000, 3 should return 9.2610000', function() {
        expect(myPow(2.1, 3)).to.be.closeTo(9.261, 0.01);
    });

    it('2.00000, -2 should return 0.25000', function() {
        expect(myPow(2.0, -2)).to.equal(0.25);
    });

    it('2.00000, -2147483648 should return 0.0', function() {
        expect(myPow(2.0, -2147483648)).to.be.closeTo(0.0, 0.01);
    });
});
