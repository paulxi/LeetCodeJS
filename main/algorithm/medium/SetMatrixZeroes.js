const Flag = {
    None: 0,
    RowOnly: 1,
    ColumnOnly: 2,
    Both: 3
};

const setZeroes = function(matrix) {
    if (matrix && matrix.length) {
        const m = matrix.length;
        const n = matrix[0].length;

        let flag = Flag.None;
        if (matrix[0][0] === 0) {
            flag = Flag.Both;
        } else {
            for (let i = 1; i < m; i++) {
                if (matrix[i][0] == 0) {
                    flag = Flag.ColumnOnly;
                    break;
                }
            }

            for (let j = 1; j < n; j++) {
                if (matrix[0][j] == 0) {
                    flag = flag | Flag.RowOnly;
                    break;
                }
            }
        }

        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                if (matrix[i][j] == 0) {
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }
            }
        }

        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                    matrix[i][j] = 0;
                }
            }
        }

        if (flag != Flag.None) {
            if ((flag & Flag.ColumnOnly) === Flag.ColumnOnly) {
                for (let i = 0; i < m; i++) {
                    matrix[i][0] = 0;
                }
            }

            if ((flag & Flag.RowOnly) === Flag.RowOnly) {
                for (let j = 0; j < n; j++) {
                    matrix[0][j] = 0;
                }
            }

        }
    }
};

module.exports = setZeroes;