/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = function(str) {
    const posRemainder = MAX_INT32 % 10;
    const negRemainder = MIN_INT32 % 10;

    let result = 0;
    let negative = false;
    let ptr = 0;
    while (str.charAt(ptr) === ' ') {
        ptr++;
    }

    if (str.charAt(ptr) == '-') {
        negative = true;
        ptr++;
    } else if (str.charAt(ptr) == '+') {
        ptr++;
    }

    for (; ptr < str.length; ptr++) {
        const char = str.charAt(ptr);
        if (char >= '0' && char <= '9') {
            const sub = negative ? '0' - char : char - '0';
            if (negative) {
                if (result < Math.trunc(MIN_INT32 / 10) || (result === Math.trunc(MIN_INT32 / 10) && sub < negRemainder)) {
                    result = MIN_INT32;
                    break;
                }
            } else {
                if (result > Math.trunc(MAX_INT32 / 10) || (result === Math.trunc(MAX_INT32 / 10) && sub > posRemainder)) {
                    result = MAX_INT32;
                    break;
                }
            }
            result = result * 10 + sub;
        } else {
            break;
        }
    }

    return result;
};

const MAX_INT32 = (2 ** 31) - 1;
const MIN_INT32 = -(2 ** 31);

module.exports = myAtoi;
