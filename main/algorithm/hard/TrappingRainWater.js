const trap = function(height) {
    if (!height || height.length <= 2) {
        return 0;
    }

    const leftMax = new Array(height.length);
    leftMax[0] = height[0];
    for (let idx = 1; idx < height.length; idx++) {
        leftMax[idx] = Math.max(leftMax[idx - 1], height[idx]);
    }

    const rightMax = new Array(height.length);
    rightMax[height.length - 1] = height[height.length - 1];
    for (let idx = height.length - 2; idx >= 0; idx--) {
        rightMax[idx] = Math.max(rightMax[idx + 1], height[idx]);
    }

    let result = 0;
    for (let idx = 1; idx < height.length - 1; idx++) {
        result += Math.min(leftMax[idx], rightMax[idx]) - height[idx];
    }

    return result;
};

module.exports = trap;
