const expect = require('chai').expect;
const longestConsecutive
    = require('../../../main/algorithm/hard/LongestConsecutiveSequence');

describe('Longest Consecutive Sequence', function() {
    it('[100, 4, 200, 1, 3, 2] should return 1', function() {
        expect(longestConsecutive([100, 4, 200, 1, 3, 2])).to.equal(4);
    });
});