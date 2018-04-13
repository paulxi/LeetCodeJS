const expect = require('chai').expect;
const longestPalindrome =
    require('../../../main/algorithm/medium/' +
        'LongestPalindrome');

describe('Longest Palindrome', function() {
    it('empty string should return ""', function() {
        expect(longestPalindrome('')).to.equal('');
    });

    it('"a" should return "a"', function() {
        expect(longestPalindrome('a')).to.equal('a');
    });

    it('"babad" should return "bab"', function() {
        expect(longestPalindrome('babad')).to.equal('bab');
    });

    it('"cbbd" should return "bb"', function() {
        expect(longestPalindrome('cbbd')).to.equal('bb');
    });
});
