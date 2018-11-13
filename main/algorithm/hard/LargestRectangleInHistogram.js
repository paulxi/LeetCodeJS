const largestRectangleArea = function(heights) {
    if (heights.length === 0) {
        return 0;
    }
    if (heights.length === 1) {
        return heights[0];
    }

    return calculateArea(heights, 0, heights.length - 1);
};

const calculateArea = function(heights, start, end) {
    if (start > end) {
        return 0;
    }

    let shortest = heights[start];
    let shortestIndex = start;
    for (let i = start + 1; i <= end; i++) {
        if (heights[i] < shortest) {
            shortest = heights[i];
            shortestIndex = i;
        }
    }

    const area = shortest * (end - start + 1);
    const leftArea = calculateArea(heights, start, shortestIndex - 1);
    const rightArea = calculateArea(heights, shortestIndex + 1, end);

    return Math.max(area, leftArea, rightArea);
};

module.exports = largestRectangleArea;