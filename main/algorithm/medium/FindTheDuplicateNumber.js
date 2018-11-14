const findDuplicate = function(nums) {
    let slow = nums[0];
    let fast = nums[0];

    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];

        if (slow === fast) {
            break;
        }
    }

    let ptr = nums[0];
    while (ptr != slow) {
        ptr = nums[ptr];
        slow = nums[slow];
    }

    return ptr;
};

module.exports = findDuplicate;