const mostCommonWord = function (paragraph, banned) {
    let bannedSet = new Set(banned);

    const words = paragraph.toLowerCase().split(/[ !?',;.]/).filter(str => {
        return str.length > 0 && !bannedSet.has(str);
    });

    let map = new Map();
    const maxResult = words.reduce((result, word) => {
        let count = map.get(word);
        if (count) {
            count += 1;
        } else {
            count = 1;
        }
        map.set(word, count);
        if (count > result[1]) {
            return [word, count];
        } else {
            return result;
        }

    }, ["", 0]);

    return maxResult[0];
};

module.exports = mostCommonWord;
