const expect = require('chai').expect;
const generateParenthesis =
    require('../../../main/algorithm/medium/GenerateParentheses');

describe('Generate Parentheses', function() {
    it('n = 3 should return ["((()))","(()())","(())()","()(())","()()()"]', function() {
        expect(new Set(generateParenthesis(3)))
            .to.deep.equal(new Set(['((()))', '(()())', '(())()', '()(())', '()()()']));
    });
});