const kEmptySlots = function(flowers, k) {
    let days = new Array(flowers.length);
    for (let i = 0; i < flowers.length; i++) {
        days[flowers[i] - 1] = i + 1;
    }

    let ans = Number.MAX_VALUE;
    let left = 0;
    let right = left + k + 1;
    while (right < days.length) {
        let i = left + 1;
        for (; i < right; i++) {
            if (days[i] < days[left] || days[i] < days[right]) {
                break;
            }
        }

        if (i === right) {
            ans = Math.min(ans, Math.max(days[left], days[right]));
        }

        left = i;
        right = left + k + 1;
    }

    return ans < Number.MAX_VALUE ? ans : -1;
};

module.exports = kEmptySlots;