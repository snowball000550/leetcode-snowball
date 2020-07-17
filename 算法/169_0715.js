// 169. 多数元素
// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums = nums.sort((a, b) => a - b);
    const mid = Math.floor(nums.length / 2);
    return nums[mid];
};

var majorityElement = function(nums) {
    const obj = {};
    const mid = Math.floor(nums.length / 2);
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]]++;
        } else {
            obj[nums[i]] = 1;
        }
        if (obj[nums[i]] > mid) {
            return nums[i];
        }
    }
}