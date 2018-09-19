/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function(s, p) {
    let result = [];
    for (let i = 0; i < s.length + 1; i++) {
        result.push([]);
        for (let j = 0; j < p.length + 1; j++) {
            result[i].push(false);
        }
    }

    result[0][0] = true;

    for (let i = 0; i < p.length; i++) {
        if (p.charAt(i) === '*') {
            result[0][i + 1] = result[0][i - 1];
        }
    }

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < p.length; j++) {
            if (s.charAt(i) === p.charAt(j)) {
                result[i + 1][j + 1] = result[i][j];
            } else if (p.charAt(j) === '.') {
                result[i + 1][j + 1] = result[i][j];
            } else if (p.charAt(j) === '*') {
                if (p.charAt(j - 1) !== s.charAt(i) &&
                    p.charAt(j - 1) !== '.') {
                    result[i + 1][j + 1] = result[i + 1][j - 1];
                } else {
                    result[i + 1][j + 1] = result[i + 1][j - 1]
                        || result[i + 1][j] || result[i][j + 1];
                }
            }
        }
    }

    return result[s.length][p.length];
};

module.exports = isMatch;
