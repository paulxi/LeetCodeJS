const calculate = function (s) {
    let result = 0;
    let number = 0;
    let sign = 1;
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i);
        if (c >= '0' && c <= '9') {
            number = number * 10 + (c - 0);
        } else if (c === '+') {
            result += sign * number;
            number = 0;
            sign = 1;
        } else if (c === '-') {
            result += sign * number;
            number = 0;
            sign = -1;
        } else if (c === '(') {
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
        } else if (c === ')') {
            result += sign * number;
            number = 0;
            result *= stack.pop();
            result += stack.pop();
        }
    }

    result += sign * number;
    return result;
};

module.exports = calculate;
