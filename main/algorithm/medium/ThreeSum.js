const threeSum = function(nums) {
    if (nums.length <= 2) {
        return [];
    }

    let result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || nums[i] !== nums[i -1]) {
            const sum = 0 - nums[i];
            let lo = i + 1;
            let hi = nums.length - 1;

            while (lo < hi) {
                if (nums[lo] + nums[hi] === sum) {
                    result.push([nums[i], nums[lo], nums[hi]]);
                    while (lo < hi && nums[lo] === nums[lo + 1]) {
                        lo++;
                    }
                    while (lo < hi && nums[hi] === nums[hi - 1]) {
                        hi--;
                    }
                    lo++;
                    hi--;
                } else if (nums[lo] + nums[hi] < sum) {
                    lo++;
                } else {
                    hi--;
                }
            }
        }
    }

    return result;
};

module.exports = threeSum;
