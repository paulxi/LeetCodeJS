const expect = require('chai').expect;
const spiralOrder =
    require('../../../main/algorithm/medium/SpiralMatrix');

describe('Spiral Matrix', function () {
    it('[[ 1, 2, 3 ],[ 4, 5, 6 ],[ 7, 8, 9 ]] should return [1,2,3,6,9,8,7,4,5]', function () {
        expect(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).to.deep.equal([1, 2, 3, 6, 9, 8, 7, 4, 5]);
    });

    it('[[1, 2, 3, 4],[5, 6, 7, 8],[9,10,11,12]] should return [1,2,3,4,8,12,11,10,9,5,6,7]', function () {
        expect(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])).to.deep.equal([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
    });
});
