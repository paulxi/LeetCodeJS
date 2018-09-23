const expect = require('chai').expect;
const stringToInteger =
    require('../../../main/algorithm/medium/StringToInteger');

describe('String to Integer', function() {
    it('"42" should return 42', function() {
        expect(stringToInteger('42')).to.equal(42);
    });

    it('"   -42" should return -42', function() {
        expect(stringToInteger('   -42')).to.equal(-42);
    });

    it('"4193 with words" should return 4193', function() {
        expect(stringToInteger('4193 with words')).to.equal(4193);
    });

    it('"words and 987" should return 0', function() {
        expect(stringToInteger('words and 987')).to.equal(0);
    });

    it('"-91283472332" should return -2147483648', function() {
        expect(stringToInteger('-91283472332')).to.equal(-2147483648);
    });
});
