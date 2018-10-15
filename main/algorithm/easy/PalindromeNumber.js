const isPalindrome = function(x) {
    if (x < 0 || (x % 10 == 0 && x != 0)) {
        return false;
    }

    let num = x;
    let reversed = 0;
    while (num > reversed) {
        reversed = reversed * 10 + num % 10;
        num = Math.trunc(num / 10);
    }

    return num == reversed || Math.trunc(reversed / 10) == num;
};

module.exports = isPalindrome;
