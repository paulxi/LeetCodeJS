const groupAnagrams = function(strs) {
    const map = new Map();
    for (let str of strs) {
        const key = str.split('').sort().join('');
        if (map.has(key)) {
            map.get(key).push(str);
        } else {
            map.set(key, [str]);
        }
    }
    return Array.from(map.values());
};

module.exports = groupAnagrams;
