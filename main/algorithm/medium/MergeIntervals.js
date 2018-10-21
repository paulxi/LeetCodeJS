const merge = function(intervals) {
    intervals.sort((lhs, rhs) => {
        return lhs.start - rhs.start;
    });

    return intervals.reduce((result, interval) => {
        if (result.length === 0) {
            return [interval];
        } else {
            const last = result[result.length - 1];
            if (last.end >= interval.start) {
                last.end = Math.max(last.end, interval.end);
            } else {
                result.push(interval);
            }
            return result;
        }
    }, []);
};

module.exports = merge;




