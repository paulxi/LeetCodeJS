const expect = require('chai').expect;
const minWindow
    = require('../../../main/algorithm/hard/MinimumWindowSubstring');

describe('Minimum Window Substring', function() {
    it('S = "ADOBECODEBANC", T = "ABC" should return "BANC"', function() {
        expect(minWindow('ADOBECODEBANC', 'ABC')).to.equal('BANC');
    });

    it('S = "aa", T = "aa" should return "aa"', function() {
        expect(minWindow('aa', 'aa')).to.equal('aa');
    });
});
