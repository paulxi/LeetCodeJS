const expect = require('chai').expect;
const numIslands =
    require('../../../main/algorithm/medium/NumberOfIslands');

describe('Number of Islands', function() {
    it('test case 1 should return 1', function() {
        expect(numIslands([['1', '1', '1', '1', '0'],
            ['1', '1', '0', '1', '0'],
            ['1', '1', '0', '0', '0'],
            ['0', '0', '0', '0', '0']])).to.equal(1);
    });

    it('test case 2 should return 3', function() {
        expect(numIslands([['1', '1', '0', '0', '0'],
            ['1', '1', '0', '0', '0'],
            ['0', '0', '1', '0', '0'],
            ['0', '0', '0', '1', '1']])).to.equal(3);
    });

    it('test case 3 should return 1', function() {
        expect(numIslands([['1', '1', '1'],
            ['0', '1', '0'],
            ['1', '1', '1']])).to.equal(1);
    });
});
