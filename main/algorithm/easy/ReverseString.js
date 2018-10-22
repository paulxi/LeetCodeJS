const reverseString = function(s) {
    if (s) {
        const chars = new Array(s.length);
        for (let i = 0; i < s.length / 2; i++) {
            const back = s.length - 1 - i;
            chars[back] = s.substring(i, i + 1);
            chars[i] = s.substring(back, back + 1);
        }
        return chars.join('');
    } else {
        return s;
    }
};

module.exports = reverseString;