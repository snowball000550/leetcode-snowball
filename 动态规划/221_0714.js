// 221. 最大正方形
// 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。

// 示例:

// 输入: 

// 1 0 1 0 0
// 1 0 1 1 1
// 1 1 1 1 1
// 1 0 0 1 0

// 输出: 4

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const len1 = matrix.length;
    const len2 = matrix[0].length;
    const dp = [];
    let max = 0;
    for (let i = 0; i <= len1; i++) {
        if (i === 0) {
            dp[i] = new Array(len2 + 1).fill(0);
        } else {
            dp[i] = [0];
        }
    }
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (matrix[i - 1][j - 1] === '1'){
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
                max = Math.max(dp[i][j], max);
            } else {
                dp[i][j] = 0;
            }
        }
    }
    return max * max;
};