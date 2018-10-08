const numJewelsInStones = function(jewels, stones) {
    const set = new Set();
    for (let char of jewels) {
        set.add(char);
    }

    let count = 0;
    for (let char of stones) {
        if (set.has(char)) {
            count += 1;
        }
    }

    return count;
};

module.exports = numJewelsInStones;