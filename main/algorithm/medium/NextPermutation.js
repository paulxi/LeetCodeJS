const nextPermutation = function(nums) {
    if (nums.length <= 1) {
        return
    }

    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i -= 1;
    }
    
    if (i >= 0) {
        let j = nums.length - 1;
        while (j >= 0 && nums[j] <= nums[i]) {
            j -= 1;
        }
        swap(nums, i, j);
    }

    reverse(nums, i + 1);
};

const swap = function(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
};

const reverse = function(nums, start) {
    let i = start;
    let j = nums.length - 1;
    while (i < j) {
        swap(nums, i, j);
        i += 1;
        j -= 1;
    }
};

module.exports = nextPermutation;