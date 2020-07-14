// 62. 不同路径
// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

// 问总共有多少条不同的路径？

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

var uniquePaths = function(m, n) {
    const dp = {};
    const fn = (i, j) => {
        if (i === 0 || j === 0) {
            return 1;
        }
        return fn(i - 1, j) + fn(i, j - 1); 
    }
    return fn(m - 1, n - 1)
}


var uniquePaths = function(m, n) {
    let dp = new Array(m);
    // if (!dp[0]) dp[0] = [];
    // if (!dp[1]) dp[1] = [];
    // dp[0][0] = 0;
    // dp[0][1] = 1;
    // dp[1][0] = 1;
    for (let i = 0; i < n; i++){
        dp[i] = new Array(m);
        dp[i][0] = 1;
    }
    for (let i = 0; i < m; i++){
        dp[0][i] = 1;
    }
    for(let i = 1; i < n; i++){
        for (let j = 1; j < m; j++){
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }
    return dp[n - 1][m - 1]
};


var uniquePaths = function(m, n) {
    const fn = (i, j) => {
        if (i === 0 || j === 0) {
            return 1;
        }
        return fn(i - 1, j) + fn(i, j - 1); 
    }
    return fn(m - 1, n - 1)
}