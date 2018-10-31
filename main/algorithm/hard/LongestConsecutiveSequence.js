const longestConsecutive = function(nums) {
    if (nums.length <= 1) {
        return nums.length;
    }

    nums.sort((a, b) => a - b);

    let last_i = 0;
    let maxLength = 1;
    let duplicated = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            duplicated += 1;
        } else if (nums[i] === nums[i - 1] + 1) {
            const length = i - last_i - duplicated + 1;
            maxLength = Math.max(maxLength, length);
        } else {
            last_i = i;
            duplicated = 0;
        }
    }

    return maxLength;
};

module.exports = longestConsecutive;