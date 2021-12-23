

var maxProfit = function (prices) {
    let maxProfit = 0;
    let chepestPrice = prices[0];

    for (let i = 0; i < prices.length; i++) {
        const price = prices[i];
        if (price < chepestPrice) chepestPrice = price;

        const currentProfit = price - chepestPrice;
        maxProfit = Math.max(currentProfit, maxProfit);
    }

    return maxProfit;
};