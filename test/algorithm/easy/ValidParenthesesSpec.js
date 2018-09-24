const expect = require('chai').expect;
const validParenthese = require('../../../main/algorithm/easy/ValidParentheses');

describe('Valid Parenthese', function() {
    it('"()" should return true', function() {
        expect(validParenthese('()')).to.equal(true);
    });

    it('"()[]{}" should return true', function() {
        expect(validParenthese('()[]{}')).to.equal(true);
    });

    it('"(]" should return false', function() {
        expect(validParenthese('(]')).to.equal(false);
    });

    it('"([)]" should return false', function() {
        expect(validParenthese('([)]')).to.equal(false);
    });

    it('"{[]}" should return true', function() {
        expect(validParenthese('{[]}')).to.equal(true);
    });
});