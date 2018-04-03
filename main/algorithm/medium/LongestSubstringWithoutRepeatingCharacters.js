/**
 * Given a string, find the length of the longest substring without
 * repeating characters.
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    const strLen = s.length;
    let maxLength = 0;
    let startIndex = 0;
    let currentIndex = 0;
    const map = new Map();

    while (maxLength + startIndex < strLen) {
        const char = s.substr(currentIndex, 1);
        if (map.has(char)) {
            startIndex = Math.max(startIndex, map.get(char) + 1);
        }
        maxLength = Math.max(maxLength, currentIndex - startIndex + 1);
        map.set(char, currentIndex);
        currentIndex++;
    }

    return maxLength;
};

module.exports = lengthOfLongestSubstring;
