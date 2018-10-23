const spiralOrder = function(matrix) {
    let result = [];
    if (matrix && matrix.length > 0) {
        fill(matrix, 0, matrix.length - 1, 0, matrix[0].length - 1, result);
    }

    return result;
};

const fill = function(matrix, rowBegin, rowEnd, colBegin, colEnd, result) {
    if (rowBegin <= rowEnd && colBegin <= colEnd) {
        for (let col = colBegin; col <= colEnd; col++) {
            result.push(matrix[rowBegin][col]);
        }

        for (let row = rowBegin + 1; row <= rowEnd; row++) {
            result.push(matrix[row][colEnd]);
        }

        if (rowEnd > rowBegin && colEnd > colBegin) {
            for (let col = colEnd - 1; col >= colBegin; col--) {
                result.push(matrix[rowEnd][col]);
            }

            for (let row = rowEnd - 1; row >= rowBegin + 1; row--) {
                result.push(matrix[row][colBegin]);
            }
        }

        fill(matrix, rowBegin + 1, rowEnd - 1, colBegin + 1, colEnd - 1, result);
    }
};

module.exports = spiralOrder;