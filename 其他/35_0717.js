// 35. 搜索插入位置
// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 你可以假设数组中无重复元素。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (i === 0 && target <= nums[i]){
            return i;
        } else if (nums[i + 1] || nums[i + 1] === 0){
            if ((target > nums[i] && target < nums[i + 1]) || target === nums[i + 1]) {
                return i + 1;
            } else if (target === nums[i]) {
                return i;
            }
        } else {
            return len;
        }
    }
};
