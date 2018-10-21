const expect = require('chai').expect;
const Interval =
    require('../../../main/algorithm/common/Interval');
const minMeetingRooms =
    require('../../../main/algorithm/medium/MeetingRoomsII');

describe('Meeting Rooms II', function() {
    it('[[0, 30],[5, 10],[15, 20]] should return 2', function() {
        expect(minMeetingRooms([new Interval(0, 30),
            new Interval(5, 10),
            new Interval(15, 20)]))
            .to.equal(2);
    });

    it('[[7, 10],[2, 4]] should return 1', function() {
        expect(minMeetingRooms([new Interval(7, 10),
            new Interval(2, 4)]))
            .to.equal(1);
    });
});