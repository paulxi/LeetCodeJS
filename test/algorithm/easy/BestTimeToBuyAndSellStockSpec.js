const expect = require('chai').expect;
const maxProfit = require('../../../main/algorithm/easy/BestTimeToBuyAndSellStock');

describe('Best Time to Buy and Sell Stock', function() {
    it('[7,1,5,3,6,4] should return 5', function() {
        expect(maxProfit([7,1,5,3,6,4])).to.equal(5);
    });

    it('[7,6,4,3,1] should return 5', function() {
        expect(maxProfit([7,6,4,3,1])).to.equal(0);
    });
});