// 53. 最大子序和
// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let dp = [];
    dp[0] = nums[0];
    let max = dp[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
        if (dp[i] > max) {
            max = dp[i];
        }
    }
    return max;
};