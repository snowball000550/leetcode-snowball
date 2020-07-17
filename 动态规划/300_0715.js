// 300. 最长上升子序列
// 给定一个无序的整数数组，找到其中最长上升子序列的长度。

// 示例:

// 输入: [10,9,2,5,3,7,101,18]
// 输出: 4 
// 解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
// 说明:

// 可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
// 你算法的时间复杂度应该为 O(n2) 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const len = nums.length;
    if (len === 0) return 0;
    const dp = new Array(len).fill(1);
    let max = 1;
    for (let i = 1; i < len; i++) {
        let index = 1;
        while(i - index >= 0){
            if (nums[i] > nums[i - index]){
                dp[i] = Math.max(dp[i], dp[i - index] + 1)
            }
            index++;
        }
        max = Math.max(max, dp[i])
    }
    return max;
};