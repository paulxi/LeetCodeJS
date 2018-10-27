const expect = require('chai').expect;
const kEmptySlots
    = require('../../../main/algorithm/hard/KEmptySlots');

describe('K Empty Slots', function() {
    it('flowers: [1,3,2] k: 1 should return 2', function() {
        expect(kEmptySlots([1,3,2], 1)).to.equal(2);
    });

    it('flowers: [1,2,3] k: 1 should return -1', function() {
        expect(kEmptySlots([1,2,3], 1)).to.equal(-1);
    });

    it('flowers: [6, 5, 8, 9, 7, 1, 10, 2, 3, 4] k: 2 should return 8', function() {
        expect(kEmptySlots([6, 5, 8, 9, 7, 1, 10, 2, 3, 4], 2)).to.equal(8);
    });
});