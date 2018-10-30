const removeInvalidParentheses = function(s) {
    const ans = [];
    remove(s, ans, 0, 0, ['(', ')']);
    return ans;
};

const remove = function(s, ans, last_i, last_j, par) {
    let stack = 0;
    for (let i = last_i; i < s.length; i++) {
        if (s.substring(i, i + 1) === par[0]) {
            stack += 1;
        }
        if (s.substring(i, i + 1) === par[1]) {
            stack -= 1;
        }
        if (stack >= 0) {
            continue;
        }
        for (let j = last_j; j <= i; j++) {
            if (s.substring(j, j + 1) === par[1] && (j === last_j || s.substring(j - 1, j) !== par[1])) {
                remove(s.substring(0, j) + s.substring(j + 1), ans, i, j, par);
            }
        }

        return;
    }

    const reversed = s.split("").reverse().join("");
    if (par[0] === '(') {
        remove(reversed, ans, 0, 0, [')', '(']);
    } else {
        ans.push(reversed);
    }
};

module.exports = removeInvalidParentheses;
