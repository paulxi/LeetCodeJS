/**
 * Given an array of integers, return indices of the two numbers such that
 * they add up to a specific target.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const map = new Map();
    for (let [index, item] of nums.entries()) {
        const value = target - item;
        if (map.has(value)) {
            return [map.get(value), index];
        }
        map.set(item, index);
    }
    return [];
};

module.exports = twoSum;
