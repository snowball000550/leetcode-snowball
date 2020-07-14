// 55. 跳跃游戏
// 给定一个非负整数数组，你最初位于数组的第一个位置。

// 数组中的每个元素代表你在该位置可以跳跃的最大长度。

// 判断你是否能够到达最后一个位置。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const len = nums.length;
    if (len === 1) return true;
    const candidate = [];
    const fn = (end) => {
        if (end === 0) {
            return true;
        }
        for (let i = end - 1; i >= 0; i--) {
            if (end - i <= nums[i]) {
                return fn(i)
            }
        }
    }
    for (let i = len - 2; i >= 0; i--) {
        if (len - 1 - i <= nums[i]) {
            return fn(i) ? fn(i) : false
        }
    }
    return false;
};
