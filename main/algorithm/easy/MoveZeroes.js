const moveZeroes = function(nums) {
    let currentPointer = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[currentPointer] = nums[i];
            currentPointer += 1;
        }
    }

    for (let i = currentPointer; i < nums.length; i++) {
        nums[i] = 0;
    }
};

module.exports = moveZeroes;
