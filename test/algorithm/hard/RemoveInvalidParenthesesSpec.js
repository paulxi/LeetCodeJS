const expect = require('chai').expect;
const removeInvalidParentheses
    = require('../../../main/algorithm/hard/RemoveInvalidParentheses');

describe('Remove Invalid Parentheses', function() {
    it('"()())()" should return ["()()()", "(())()"]', function() {
        expect(new Set(removeInvalidParentheses('()())()'))).to.deep.equal(new Set(['()()()', '(())()']));
    });

    it('"(a)())()" should return ["(a)()()", "(a())()"]', function() {
        expect(new Set(removeInvalidParentheses('(a)())()'))).to.deep.equal(new Set(['(a)()()', '(a())()']));
    });

    it('")(" should return [""]', function() {
        expect(new Set(removeInvalidParentheses(')('))).to.deep.equal(new Set(['']));
    });
});
