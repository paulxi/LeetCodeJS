const expect = require('chai').expect;
const maximalRectangle
    = require('../../../main/algorithm/hard/MaximalRectangle');

describe('Maximal Rectangle', function() {
    it('[["1","0","1","0","0"], ["1","0","1","1","1"], ["1","1","1","1","1"], ["1","0","0","1","0"]] should return 6', function() {
        const input = [['1','0','1','0','0'], ['1','0','1','1','1'], ['1','1','1','1','1'], ['1','0','0','1','0']];
        expect(maximalRectangle(input)).to.equal(6);
    });

    it('[["0","0","0"], ["0","0","0"], ["0","0","0"], ["0","0","0"]] should return 0', function() {
        const input = [['0','0','0'], ['0','0','0'], ['0','0','0'], ['0','0','0']];
        expect(maximalRectangle(input)).to.equal(0);
    });
});