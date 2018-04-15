/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function(s, numRows) {
    if (numRows == 1) {
        return s;
    }

    const rows = new Array(numRows);
    for (let i = 0; i < rows.length; i++) {
        rows[i] = '';
    }

    let index = 0;
    let topToDown = true;

    for (const char of s) {
        rows[index] += char;

        if (topToDown) {
            index += 1;
        } else {
            index -= 1;
        }

        if (index < 0) {
            index = 1;
            topToDown = true;
        }

        if (index == numRows) {
            index = numRows - 2;
            topToDown = false;
        }
    }

    return rows.reduce((acc, cur) => acc + cur, '');
};

module.exports = convert;
