// 64. 最小路径和
// 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

// 说明：每次只能向下或者向右移动一步。


/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let dp = grid.slice()
    for (let i = 1; i < m; i++) {
        dp[i][0] += dp[i - 1][0];
    }
    for (let j = 1; j < n; j++) {
        dp[0][j] += dp[0][j - 1];
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] += Math.min(dp[i - 1][j] ,dp[i][j - 1]);
        }
    }
    return dp[m - 1][n - 1];
};
