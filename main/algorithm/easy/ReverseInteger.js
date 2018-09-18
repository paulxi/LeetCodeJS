/**
 * @param {number} x
 * @return {number}
 */

const MAX_INT32 = (2 ** 31) - 1;
const MIN_INT32 = -(2 ** 31);

const reverse = function(x) {
    let rev = 0;
    const posRemainder = MAX_INT32 % 10;
    const negRemainder = MIN_INT32 % 10;

    let num = x;
    while (num != 0) {
        let pos = num % 10;
        num = Math.trunc(num / 10);

        if (rev > MAX_INT32 / 10 || (rev == MAX_INT32 / 10 && pos > posRemainder)) {
            return 0;
        }

        if (rev < MIN_INT32 / 10 || (rev == MIN_INT32 / 10 && pos < negRemainder)) {
            return 0;
        }

        rev = rev * 10 + pos;
    }

    return rev;
};

module.exports = reverse;