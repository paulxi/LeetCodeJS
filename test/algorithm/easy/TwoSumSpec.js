const assert = require('assert');
const twoSum = require('../../../main/algorithm/easy/TwoSum.js');

describe('Two Sum', function() {
    it('should return 2 numbers', function() {
        assert.deepEqual(twoSum([0, 1], 1), [0, 1]);
    });
});
