const minMeetingRooms = function(intervals) {
    const start = intervals.map(interval => interval.start).sort((a, b) => a - b);
    const end = intervals.map(interval => interval.end).sort((a, b) => a - b);

    let startPtr = 0;
    let endPtr = 0;
    let usedRooms = 0;

    while (startPtr < intervals.length) {
        if (start[startPtr] >= end[endPtr]) {
            usedRooms -= 1;
            endPtr += 1;
        }

        usedRooms += 1;
        startPtr += 1;
    }

    return usedRooms;
};

module.exports = minMeetingRooms;

