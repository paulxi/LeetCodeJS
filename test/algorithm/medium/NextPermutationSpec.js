const expect = require('chai').expect;
const nextPermutation =
    require('../../../main/algorithm/medium/NextPermutation');

describe('Next Permutation', function() {
    it('[1,2,3] should return [1,3,2]', function() {
        let nums = [1, 2, 3];
        nextPermutation(nums);
        expect(nums).to.deep.equal([1, 3, 2]);
    });

    it('[3,2,1] should return [1,2,3]', function() {
        let nums = [3, 2, 1];
        nextPermutation(nums);
        expect(nums).to.deep.equal([1, 2, 3]);
    });

    it('[1,1,5] should return [1,5,1]', function() {
        let nums = [1, 1, 5];
        nextPermutation(nums);
        expect(nums).to.deep.equal([1, 5, 1]);
    });
});