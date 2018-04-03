const expect = require('chai').expect;
const lengthOfLongestSubstring =
    require('../../../main/algorithm/medium/' +
        'LongestSubstringWithoutRepeatingCharacters');

describe('Longest Substring without Repeating Characters', function() {
    it('empty string should return 0', function() {
        expect(lengthOfLongestSubstring('')).to.equal(0);
    });

    it('"abcabcbb" should return 3', function() {
        expect(lengthOfLongestSubstring('abcabcbb')).to.equal(3);
    });

    it('"bbbbb" should return 1', function() {
        expect(lengthOfLongestSubstring('bbbbb')).to.equal(1);
    });

    it('"pwwkew" should return 3', function() {
        expect(lengthOfLongestSubstring('pwwkew')).to.equal(3);
    });
});
