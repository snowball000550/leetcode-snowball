// 120. 三角形最小路径和
// 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。

// 相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const dp = triangle;
    for (let i = triangle.length - 2; i >= 0; i--){
        for (let j = 0; j < triangle[i].length; j++){
            dp[i][j] = Math.min(dp[i+1][j], dp[i+1][j+1]) + triangle[i][j]
        }
    }
    return dp[0][0]
};