309. 最佳买卖股票时机含冷冻期
给定一个整数数组，其中第 i 个元素代表了第 i 天的股票价格 。​

设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:

你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const len = prices.length;
    if (len === 0) return 0;
    let max = 0;
    const hold = new Array(len);
    const unhold = new Array(len);
    hold[0] = -prices[0];
    unhold[0] = 0;
    // 持有股票，累计最大利益，为dp[i][0]
    // 不持有股票且处于冷冻期，累计最大利益，为dp[i][1]
    // 不持有股票且不处于冷冻期，累计最大利益，为dp[i][2]
    for (let i = 1; i < len; i++){
        if (i === 1) {
            hold[i] = Math.max(hold[i - 1], -prices[1])
        } else {
            hold[i] = Math.max(hold[i - 1], unhold[i - 2] - prices[i])
        }
        unhold[i] = Math.max(unhold[i - 1], hold[i - 1] + prices[i])
    }
    return unhold[len - 1];
};
