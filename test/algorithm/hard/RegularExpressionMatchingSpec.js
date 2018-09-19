const expect = require('chai').expect;
const isMatch
    = require('../../../main/algorithm/hard/RegularExpressionMatching');

describe('Regular Expression Matching', function() {
    it('case 1', function() {
        expect(isMatch('aa', 'a')).to.equal(false);
    });

    it('case 2', function() {
        expect(isMatch('aa', 'a*')).to.equal(true);
    });

    it('case 3', function() {
        expect(isMatch('ab', '.*')).to.equal(true);
    });

    it('case 4', function() {
        expect(isMatch('aab', 'c*a*b')).to.equal(true);
    });

    it('case 5', function() {
        expect(isMatch('mississippi', 'mis*is*p*.')).to.equal(false);
    });

    it('case 6', function() {
        expect(isMatch('aaa', 'a*')).to.equal(true);
    });
});
