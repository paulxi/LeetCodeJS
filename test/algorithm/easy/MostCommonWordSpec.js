const expect = require('chai').expect;
const mostCommonWord = require('../../../main/algorithm/easy/MostCommonWord');

describe('Most Common Word', function () {
    it('"Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"] should return "ball"', function () {
        expect(mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'])).to.equal('ball');
    });

    it('"Bob. hIt, baLl", ["bob", "hit"] should return "ball"', function () {
        expect(mostCommonWord('Bob. hIt, baLl', ['bob', 'hit'])).to.equal('ball');
    });
});