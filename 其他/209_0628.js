// 209. 长度最小的子数组
// 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组，并返回其长度。如果不存在符合条件的连续子数组，返回 0。

// 示例: 

// 输入: s = 7, nums = [2,3,1,2,4,3]
// 输出: 2
// 解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。
// 进阶:

// TODO:如果你已经完成了O(n) 时间复杂度的解法, 请尝试 O(n log n) 时间复杂度的解法。

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    const len = nums.length;
    if (len === 0) return 0;
    let result = Infinity;
    for (let i = 0; i < len; i++) {
        let j = i;
        let sum = 0;
        while( j < len) {
            sum = sum + nums[j];
            if (sum >= s) {
                result = Math.min(result, j + 1 - i);
                break;
            }
            j++;
        }
        
    }
    return result === Infinity ? 0: result;
};