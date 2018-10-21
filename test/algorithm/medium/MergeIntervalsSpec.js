const expect = require('chai').expect;
const Interval =
    require('../../../main/algorithm/common/Interval');
const merge =
    require('../../../main/algorithm/medium/MergeIntervals');

describe('Merge Intervals', function() {
    it('test case 1 should work', function() {
        expect(merge([new Interval(1, 3),
                                    new Interval(2, 6),
                                    new Interval(8, 10),
                                    new Interval(15, 18)]))
            .to.deep.equal([new Interval(1, 6),
                        new Interval(8, 10),
                        new Interval(15, 18)]);
    });

    it('test case 2 should work', function() {
        expect(merge([new Interval(1, 4),
            new Interval(4, 5)]))
            .to.deep.equal([new Interval(1, 5)]);
    });

    it('test case 3 should work', function() {
        expect(merge([new Interval(1, 4),
            new Interval(2, 3)]))
            .to.deep.equal([new Interval(1, 4)]);
    });
});