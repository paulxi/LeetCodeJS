const expect = require('chai').expect;
const MergeIntervals =
    require('../../../main/algorithm/medium/MergeIntervals');

describe('Merge Intervals', function() {
    it('test case 1 should work', function() {
        expect(MergeIntervals.merge([new MergeIntervals.Interval(1, 3),
                                    new MergeIntervals.Interval(2, 6),
                                    new MergeIntervals.Interval(8, 10),
                                    new MergeIntervals.Interval(15, 18)]))
            .to.deep.equal([new MergeIntervals.Interval(1, 6),
                        new MergeIntervals.Interval(8, 10),
                        new MergeIntervals.Interval(15, 18)]);
    });

    it('test case 2 should work', function() {
        expect(MergeIntervals.merge([new MergeIntervals.Interval(1, 4),
            new MergeIntervals.Interval(4, 5)]))
            .to.deep.equal([new MergeIntervals.Interval(1, 5)]);
    });

    it('test case 3 should work', function() {
        expect(MergeIntervals.merge([new MergeIntervals.Interval(1, 4),
            new MergeIntervals.Interval(2, 3)]))
            .to.deep.equal([new MergeIntervals.Interval(1, 4)]);
    });
});