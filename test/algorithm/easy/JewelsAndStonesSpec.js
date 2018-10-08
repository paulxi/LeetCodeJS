const expect = require('chai').expect;
const numJewelsInStones = require('../../../main/algorithm/easy/JewelsAndStones');

describe('Jewels and Stones', function() {
    it('J = "aA", S = "aAAbbbb" should return 3', function() {
        expect(numJewelsInStones('aA', 'aAAbbbb')).to.equal(3);
    });

    it('J = "z", S = "ZZ" should return 0', function() {
        expect(numJewelsInStones('z', 'ZZ')).to.equal(0);
    });
});