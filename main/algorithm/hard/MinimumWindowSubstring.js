const minWindow = function(s, t) {
    if (s.length < t.length || t.length === 0) {
        return '';
    }

    const map = new Map();
    for (let i = 0; i < t.length; i++) {
        const char = t.charAt(i);
        const count = map.get(char);
        if (count) {
            map.set(char, count + 1);
        } else {
            map.set(char, 1);
        }
    }

    const required = map.size;
    const ans = [-1, 0, 0];
    const windowCounts = new Map();
    let l = 0;
    let r = 0;
    let formed = 0;

    while (r < s.length) {
        const char = s.charAt(r);
        let count = windowCounts.get(char);
        if (count) {
            count += 1;
        } else {
            count = 1;
        }
        windowCounts.set(char, count);

        if (map.has(char) && map.get(char) === count) {
            formed += 1;
        }

        while (l <= r && formed === required) {
            if (ans[0] === -1 || ans[0] > r - l + 1) {
                ans[0] = r - l + 1;
                ans[1] = l;
                ans[2] = r;
            }

            const leftChar = s.charAt(l);
            let leftCount = windowCounts.get(leftChar);
            leftCount -= 1;
            windowCounts.set(leftChar, leftCount);
            if (map.has(leftChar) && leftCount < map.get(leftChar)) {
                formed -= 1;
            }

            l += 1;
        }

        r += 1;
    }

    return ans[0] === -1 ? "" : s.substring(ans[1], ans[2] + 1);
};

module.exports = minWindow;
