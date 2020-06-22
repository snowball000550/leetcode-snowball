// 15. 三数之和
// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const len = nums.length;
    const result = [];
    if (len < 3) {
        return [];
    }
    nums.sort((a,b) => (a - b));
    for(let i = 0;i < len; i++){
        if(nums[i] > 0) break; 
        if(i > 0 && nums[i] === nums[i-1]) continue;
        let left = i + 1;
        let right = len - 1;
        while(left < right) {
            let temp_sum = nums[i] + nums[left] + nums[right];
            if (temp_sum === 0) {
                result.push([nums[i], nums[left], nums[right]])
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (temp_sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
    return result;
};
