const maxArea = function(height) {
    if (height.length < 2) {
        return 0;
    }

    let result = 0;
    let i = 0;
    let j = height.length - 1;
    while (i < j) {
        result = Math.max(result, Math.min(height[i], height[j]) * (j - i));
        if (height[i] < height[j]) {
            i += 1;
        } else {
            j -= 1;
        }
    }

    return result;
};

module.exports = maxArea;