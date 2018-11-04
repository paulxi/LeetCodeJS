const expect = require('chai').expect;
const moveZeroes = require('../../../main/algorithm/easy/MoveZeroes');

describe('Move Zeroes', function () {
    it('[0,1,0,3,12] should return [1,3,12,0,0]', function () {
        const params = [0, 1, 0, 3, 12];
        const expected = [1, 3, 12, 0, 0];
        moveZeroes(params);
        expect(params).to.deep.equal(expected);
    });
});
