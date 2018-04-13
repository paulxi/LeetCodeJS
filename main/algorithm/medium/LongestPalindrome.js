/**
 * Given a string s, find the longest palindromic substring in s
 * @param {String} s the string
 * @return {String} the longest palindromic substring
 */
const longestPalindrome = function(s) {
    let result = '';

    for (let i = 0; i < s.length; i++) {
        const palindrome1 = findPalindrome(s, i, i);
        const palindrome2 = findPalindrome(s, i, i + 1);

        if (palindrome1.length > result.length) {
            result = palindrome1;
        }

        if (palindrome2.length > result.length) {
            result = palindrome2;
        }
    }

    return result;
};

const findPalindrome = function(s, leftStartIndex, rightStartIndex) {
    const strLength = s.length;
    let left = leftStartIndex;
    let right = rightStartIndex;
    let result = '';

    while (left >= 0 && right < strLength) {
        const leftChar = s.substr(left, 1);
        const rightChar = s.substr(right, 1);

        if (leftChar == rightChar) {
            result += rightChar;

            if (left != right) {
                result = leftChar + result;
            }

            left += -1;
            right += 1;
        } else {
            break;
        }
    }

    return result;
};

module.exports = longestPalindrome;
