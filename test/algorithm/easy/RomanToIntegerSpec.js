const expect = require('chai').expect;
const romanToInt = require('../../../main/algorithm/easy/RomanToInteger');

describe('Roman to Integer', function() {
    it('III should return 3', function() {
        expect(romanToInt('III')).to.equal(3);
    });

    it('IV should return 4', function() {
        expect(romanToInt('IV')).to.equal(4);
    });

    it('IX should return 9', function() {
        expect(romanToInt('IX')).to.equal(9);
    });

    it('LVIII should return 58', function() {
        expect(romanToInt('LVIII')).to.deep.equal(58);
    });

    it('MCMXCIV should return 1994', function() {
        expect(romanToInt('MCMXCIV')).to.equal(1994);
    });
});
