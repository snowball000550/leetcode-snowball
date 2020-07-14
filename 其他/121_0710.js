// 121. 买卖股票的最佳时机
// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

// 如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。

// 注意：你不能在买入股票前卖出股票。

/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     const len = prices.length;
//     let max = 0;
//     for(let i = 0; i < len - 1; i++) {
//         for (let j = i + 1; j < len; j++) {
//             max = Math.max(prices[j] - prices[i], max);
//         }
//     }
//     return max;
// };

var maxProfit = function(prices) {
    let minPrice = prices[0];
    const len = prices.length;
    let max = 0;
    for (let i = 1; i < len; i++) {
        max = Math.max(max, prices[i] - minPrice);
        minPrice = Math.min(minPrice, prices[i])
    }
    return max
}