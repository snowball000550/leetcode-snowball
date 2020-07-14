// 16. 最接近的三数之和
// 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if (nums.length < 3) return [];
    nums.sort((a, b) => a - b);
    let diff_2 = null;
    let result = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        let diff = target - nums[i];
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (diff - (nums[j] + nums[k]) === 0) {
                    return target;
                } else if (!diff_2 || Math.abs(diff_2) > Math.abs(diff - (nums[j] + nums[k]))) {
                    diff_2 = diff - (nums[j] + nums[k]);
                    result = nums[i] + nums[j] + nums[k];
                }
            }
        }
    }
    return result;
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if (nums.length < 3) return 0;
    nums.sort((a, b) => a - b);
    let result = 0;
    let min = 999999;
    for (let i = 0; i < nums.length - 2; i++) {
        let j = i + 1;
        let k = nums.length - 1;
        while(j < k) {
            if (Math.abs(target - (nums[i] + nums[j] + nums[k])) < min) {
                min = Math.abs(target - (nums[i] + nums[j] + nums[k]))
                result = nums[i] + nums[j] + nums[k];
            }
            if (nums[i] + nums[j] + nums[k] > target) {
                k--;
            } else if (nums[i] + nums[j] + nums[k] < target) {
                j++;
            } else if (nums[i] + nums[j] + nums[k] === target) {
                return target;
            }
            
        }
    }
    return result;
};