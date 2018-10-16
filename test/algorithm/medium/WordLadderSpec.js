const expect = require('chai').expect;
const ladderLength =
    require('../../../main/algorithm/medium/WordLadder');

describe('Word Ladder', function() {
    it('"hit", "cog" should return 5', function() {
        expect(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])).to.equal(5);
    });

    it('"hit", "cog" should return 0', function() {
        expect(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log'])).to.equal(0);
    });

    it('"hot", "dog" should return 0', function() {
        expect(ladderLength('hot', 'dog', ['hot', 'dog'])).to.equal(0);
    });
});
