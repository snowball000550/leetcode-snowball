// 31. 下一个排列
// 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。

// 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

// 必须原地修改，只允许使用额外常数空间。

// 以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const len = nums.length;
    if (len === 0 || len === 1) {
        return nums;
    }
    let min = len - 1;
    for (let i = len - 1; i >= 1; i--) {
        if (nums[i] > nums[i - 1]) {
            for(let j = len - 1; j >= 0; j--){
                if (nums[j] > nums[i - 1]){
                    min = j;
                    break;
                }
            }
            nums = swap(nums, i - 1, min)
            if(i !== len - 1) {
                nums = reverse(nums, i, len - 1);
            }
            return nums;
        } else {
            if (nums[i] < nums[min]) {
                min = i;
            }
        }
    }
    nums.sort((a, b) => a - b)
    return nums;
};

var swap = function(list, i, j) {
    const temp = list[i];
    list[i] = list[j]
    list[j] = temp;
    return list;
}

var reverse = function(list, i, j) {
    while(i < j) {
        [list[i],list[j]] = [list[j], list[i]];
        i++;
        j--;
    }
    return list;
}
