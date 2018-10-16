const ladderLength = function(beginWord, endWord, wordList) {
    let remained = new Set(wordList);
    let reached = new Set();
    reached.add(beginWord);

    let distance = 1;
    while (remained.size > 0 && reached.size > 0) {
        if (reached.has(endWord)) {
            return distance;
        }

        reached.forEach(value => remained.delete(value));

        distance += 1;
        let children = new Set();
        for (let word of reached) {
            for (let str of remained) {
                if (!children.has(str) && isOneLetterDiff(word, str)) {
                    children.add(str);
                }
            }
        }

        reached = children;
    }

    return 0;
};

const isOneLetterDiff = function(src, dist) {
    for (let i = 0; i < src.length; i++) {
        if (src.charAt(i) != dist.charAt(i)) {
            return src.substring(i + 1) === dist.substring(i + 1)
        }
    }

    return false;
};

module.exports = ladderLength;
