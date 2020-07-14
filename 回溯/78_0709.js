// 78. 子集
// 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

// 说明：解集不能包含重复的子集。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const len = nums.length;
    const result = [];
    const fn = (start, arr) => {
        result.push(arr);
        for (let i = start; i < len; i++) {
            arr.push(nums[i])
            fn(i + 1, arr.slice());
            arr.pop()
        }
    }
    fn(0, [])
    return result;
};