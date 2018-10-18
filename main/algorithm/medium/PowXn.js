const myPow = function(x, n) {
    const power = Math.abs(n);
    const num = n < 0 ? (1 / x) : x;

    let result = 1;
    let production = num;

    for (let i = power; i > 0; i = Math.trunc(i / 2)) {
        if (i % 2 == 1) {
            result *= production;
        }
        production *= production;
    }
    return result;
};

module.exports = myPow;