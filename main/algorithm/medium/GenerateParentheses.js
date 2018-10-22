const generateParenthesis = function(n) {
    const ans = [];
    backtrace(ans, "", 0, 0, n);
    return ans;
};

const backtrace = function(ans, cur, open, close, max) {
    if (cur.length == max * 2) {
        ans.push(cur);
        return;
    }

    if (open < max) {
        backtrace(ans, cur + '(', open + 1, close, max);
    }

    if (close < open) {
        backtrace(ans, cur + ')', open, close + 1, max)
    }
};

module.exports = generateParenthesis;
