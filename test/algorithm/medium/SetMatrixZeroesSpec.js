const expect = require('chai').expect;
const setZeroes =
    require('../../../main/algorithm/medium/SetMatrixZeroes');

describe('Set Matrix Zeroes', function () {
    it('[[1,1,1],[1,0,1],[1,1,1]] should return [[1,0,1],[0,0,0],[1,0,1]]', function () {
        const params = [[1,1,1],[1,0,1],[1,1,1]];
        const expected = [[1,0,1],[0,0,0],[1,0,1]];
        setZeroes(params);
        expect(params).to.deep.equal(expected);
    });

    it('[[0,1,2,0],[3,4,5,2],[1,3,1,5]] should return [[0,0,0,0],[0,4,5,0],[0,3,1,0]]', function () {
        const params = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
        const expected = [[0,0,0,0],[0,4,5,0],[0,3,1,0]];
        setZeroes(params);
        expect(params).to.deep.equal(expected);
    });
});