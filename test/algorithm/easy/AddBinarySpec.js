const expect = require('chai').expect;
const addBinary = require('../../../main/algorithm/easy/AddBinary');

describe('Add Binary', function() {
    it('a = "11", b = "1" should return "100"', function() {
        expect(addBinary('11', '1')).to.equal('100');
    });

    it('a = "1010", b = "1011" should return "10101"', function() {
        expect(addBinary('1010', '1011')).to.equal('10101');
    });
});