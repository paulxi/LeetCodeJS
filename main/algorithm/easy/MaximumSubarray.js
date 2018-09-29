const maxSubArray = function(nums) {
    let result = nums.reduce((accu, num) => {
        if (accu[1] < 0) {
            accu[1] = num;
        } else {
            accu[1] += num;
        }

        accu[0] = Math.max(accu[0], accu[1]);
        return accu;
    }, [-(2 ** 31), -(2 ** 31)]);

    return result[0];
};

module.exports = maxSubArray;