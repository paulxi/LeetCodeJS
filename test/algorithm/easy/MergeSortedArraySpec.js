const expect = require('chai').expect;
const merge = require('../../../main/algorithm/easy/MergeSortedArray');

describe('Merge Sorted Array', function () {
    it('[1,2,3,0,0,0], m = 3 and [2,5,6], n = 3 should return [1,2,2,3,5,6]', function () {
        const nums1 = [1, 2, 3, 0, 0, 0];
        const nums2 = [2, 5, 6];
        merge(nums1, 3, nums2, 3);
        expect(nums1).to.deep.equal([1, 2, 2, 3, 5, 6]);
    });
});