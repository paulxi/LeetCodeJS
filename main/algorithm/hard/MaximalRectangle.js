const maximalRectangle = function(matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return 0;
    }

    const heights = new Array(matrix[0].length);
    for (let i = 0; i < heights.length; i++) {
        heights[i] = 0;
    }
    let result = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === '1') {
                heights[j] += 1;
            } else {
                heights[j] = 0;
            }
        }
        result = Math.max(result, largestRectangleArea(heights));
    }

    return result;
};

const largestRectangleArea = function(heights) {
    const lessFromLeft = new Array(heights.length);
    const lessFromRight = new Array(heights.length);
    lessFromLeft[0] = -1;
    lessFromRight[heights.length - 1] = heights.length;

    for (let i = 1; i < heights.length; i++) {
        let p = i - 1;
        while (p >= 0 && heights[p] >= heights[i]) {
            p = lessFromLeft[p];
        }
        lessFromLeft[i] = p;
    }

    for (let i = heights.length - 2; i >= 0; i--) {
        let p = i + 1;
        while (p < heights.length && heights[p] >= heights[i]) {
            p = lessFromRight[p];
        }
        lessFromRight[i] = p;
    }

    let maxArea = 0;
    for (let i = 0; i < heights.length; i++) {
        maxArea = Math.max(maxArea, heights[i] * (lessFromRight[i] - lessFromLeft[i] - 1));
    }
    return maxArea;
};

module.exports = maximalRectangle;