const nextClosestTime = function(time) {
    const digits = new Array(
        Number(time.charAt(0)),
        Number(time.charAt(1)),
        Number(time.charAt(3)),
        Number(time.charAt(4))
    );
    const timeValue = convertToNumber(digits);

    digits.sort((a, b) => a - b);
    let firstDigits = null;
    for (let i of digits) {
        for (let j of digits) {
            if (i * 10 + j <= 23) {
                for (let k of digits) {
                    for (let l of digits) {
                        if (k* 10 + l <= 59) {
                            if (convertToNumber([i, j, k, l]) > timeValue) {
                                return String(i) + String(j) + ':' + String(k) + String(l);
                            }

                            if (firstDigits === null) {
                                firstDigits = [i, j, k, l];
                            }
                        }
                    }
                }
            }
        }
    }

    return String(firstDigits[0]) + String(firstDigits[1]) + ':' + String(firstDigits[2]) + String(firstDigits[3]);
};

const convertToNumber = function(digits) {
    return (digits[0] * 10 + digits[1]) * 60 + (digits[2] * 10 + digits[3]);
};

module.exports = nextClosestTime;
