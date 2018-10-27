const expect = require('chai').expect;
const totalFruit =
    require('../../../main/algorithm/medium/FruitIntoBaskets');

describe('Fruit Into Baskets', function () {
    it('[1,2,1] should return 3', function () {
        expect(totalFruit([1, 2, 1])).to.equal(3);
    });

    it('[0,1,2,2] should return 3', function () {
        expect(totalFruit([0, 1, 2, 2])).to.equal(3);
    });

    it('[1,2,3,2,2] should return 4', function () {
        expect(totalFruit([1, 2, 3, 2, 2])).to.equal(4);
    });

    it('[3,3,3,1,2,1,1,2,3,3,4] should return 5', function () {
        expect(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4])).to.equal(5);
    });
});