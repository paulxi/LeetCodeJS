const expect = require('chai').expect;
const calculate
    = require('../../../main/algorithm/hard/BasicCalculator');

describe('Basic Calculator', function() {
    it('"1 + 1" should return 2', function() {
        expect(calculate('1 + 1')).to.equal(2);
    });

    it('" 2-1 + 2 " should return 3', function() {
        expect(calculate(' 2-1 + 2 ')).to.equal(3);
    });

    it('"(1+(4+5+2)-3)+(6+8)" should return 23', function() {
        expect(calculate('(1+(4+5+2)-3)+(6+8)')).to.equal(23);
    });
});
