const search = function(nums, target) {
    return searchInRange(nums, 0, nums.length - 1, target);
};

const searchInRange = function(nums, low, high, target) {
    if (low <= high) {
        const mid = low + Math.trunc((high - low) / 2);
        if (nums[mid] == target) {
            return mid;
        }

        const isLeftSorted = isSorted(nums, low, mid);
        const isRightSorted = isSorted(nums, mid, high);
        if (isLeftSorted && nums[low] <= target && target < nums[mid]) {
            return searchInRange(nums, low, mid - 1, target);
        } else if (isRightSorted && nums[mid] < target && target <= nums[high]) {
            return searchInRange(nums, mid + 1, high, target);
        } else {
            if (isLeftSorted) {
                return searchInRange(nums, mid + 1, high, target);
            } else {
                return searchInRange(nums, low, mid - 1, target);
            }
        }
    } else {
        return -1
    }
};

const isSorted = function(nums, low, high) {
    return nums[low] < nums[high] || low == high;
};

module.exports = search;