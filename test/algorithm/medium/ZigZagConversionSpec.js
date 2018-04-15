const expect = require('chai').expect;
const convert = require('../../../main/algorithm/medium/ZigZagConversion');

describe('ZigZag Conversion', function() {
    it('empty string should return ""', function() {
        expect(convert('')).to.equal('');
    });

    it('"PAYPALISHIRING" should return "PAHNAPLSIIGYIR"', function() {
        expect(convert('PAYPALISHIRING', 3)).to.equal('PAHNAPLSIIGYIR');
    });
});
