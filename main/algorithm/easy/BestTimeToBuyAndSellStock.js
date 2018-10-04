const maxProfit = function(prices) {
    let max = 0;
    let temp = 0;

    for (let i = 1; i < prices.length; i++) {
        temp += prices[i] - prices[i - 1];
        if (temp > max) {
            max = temp;
        }
        if (temp < 0) {
            temp = 0;
        }
    }

    return max;
};

module.exports = maxProfit;
