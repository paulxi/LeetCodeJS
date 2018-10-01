const LetterValues = new Map([
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'x', 'y', 'z']]
]);

const letterCombinations = function(digits) {
    let result = [];

    if (!digits) {
        return result;
    }

    appendLetter(result, digits, '', 0);

    return result;
};

const appendLetter = function(result, digits, str, index) {
    if (index === digits.length) {
        result.push(str);
        return;
    }

    const char = digits.charAt(index);
    for (let s of LetterValues.get(char)) {
        appendLetter(result, digits, str + s, index + 1);
    }
};

module.exports = letterCombinations;