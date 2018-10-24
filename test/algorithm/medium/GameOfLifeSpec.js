const expect = require('chai').expect;
const gameOfLife =
    require('../../../main/algorithm/medium/GameOfLife');

describe('Game of Life', function() {
    it('[[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]] should return [[0, 0, 0], [1, 0, 1], [0, 1, 1], [0, 1, 0]]', function() {
        let params = [[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]];
        const expected = [[0, 0, 0], [1, 0, 1], [0, 1, 1], [0, 1, 0]];
        gameOfLife(params);

        expect(params[0]).to.deep.equal(expected[0]);
        expect(params[1]).to.deep.equal(expected[1]);
        expect(params[2]).to.deep.equal(expected[2]);
        expect(params[3]).to.deep.equal(expected[3]);
    });
});