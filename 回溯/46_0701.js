// 46. 全排列
// 给定一个 没有重复 数字的序列，返回其所有可能的全排列。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    const fn = (n) => {
        if (n.length === nums.length) {
            result.push(n.slice())
        }
        for (let i = 0; i < nums.length; i++) {
            if (n.indexOf(nums[i]) > -1) continue;
            n.push(nums[i]);
            fn(n);
            n.pop()
        }
    }
    fn([])
    return result;
};

