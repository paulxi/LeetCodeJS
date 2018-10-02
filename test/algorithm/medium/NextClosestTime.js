const expect = require('chai').expect;
const nextClosestTime =
    require('../../../main/algorithm/medium/NextClosestTime');

describe('Next Closest Time', function() {
    it('"19:34" should return "19:39"', function() {
        expect(nextClosestTime('19:34')).to.equal('19:39');
    });

    it('"23:59" should return "22:22"', function() {
        expect(nextClosestTime('23:59')).to.equal('22:22');
    });
});