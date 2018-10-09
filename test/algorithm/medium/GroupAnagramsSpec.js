const expect = require('chai').expect;
const groupAnagrams =
    require('../../../main/algorithm/medium/GroupAnagrams');

describe('Group Anagrams', function() {
    it('["eat", "tea", "tan", "ate", "nat", "bat"] should return [["ate","eat","tea"],["nat","tan"],["bat"]]', function() {
        expect(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).to.deep.equal([['eat','tea', 'ate'],['tan', 'nat'],['bat']]);
    });
});