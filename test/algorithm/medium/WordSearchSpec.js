const expect = require('chai').expect;
const exist =
    require('../../../main/algorithm/medium/WordSearch');

describe('Word Search', function() {
    it('board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], Given word = "ABCCED" should return true', function() {
        expect(exist([['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], 'ABCCED')).to.equal(true);
    });

    it('board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], Given word = "SEE" should return true', function() {
        expect(exist([['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], 'SEE')).to.equal(true);
    });

    it('board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], Given word = "ABCB" should return false', function() {
        expect(exist([['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], 'ABCB')).to.equal(false);
    });
});

