/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        const value = Parentheses.get(char);

        if (value) {
            if (stack.length === 0 || stack.pop() != value) {
                return false;
            }
        } else {
            stack.push(char);
        }

    }

    return stack.length == 0;
};

const Parentheses = new Map([['}', '{'], [')', '('], [']', '[']]);

module.exports = isValid;
