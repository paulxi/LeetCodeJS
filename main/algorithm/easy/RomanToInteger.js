/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    return convert(0, s);
};

const convert = function(sum, str) {
    if (str.length === 0) {
        return sum;
    } else if (str.length === 1) {
        if (ROMAN_VALUE_1[str]) {
            return sum + ROMAN_VALUE_1[str];
        } else {
            return sum;
        }
    } else {
        const firstTwoChars = str.substring(0, 2);
        if (ROMAN_VALUE_2[firstTwoChars]) {
            return convert(sum + ROMAN_VALUE_2[firstTwoChars],
                str.substring(2));
        } else {
            const firstChar = str.substring(0, 1);
            if (ROMAN_VALUE_1[firstChar]) {
                return convert(sum + ROMAN_VALUE_1[firstChar],
                    str.substring(1));
            } else {
                return convert(sum, str.substring(1));
            }
        }
    }
};

/* eslint comma-dangle: ["error", "never"] */
const ROMAN_VALUE_1 = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
};

const ROMAN_VALUE_2 = {
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900
};

module.exports = romanToInt;
