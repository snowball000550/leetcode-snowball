// 75. 颜色分类-fun with flag
// 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

// 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

// 注意:
// 不能使用代码库中的排序函数来解决这道题。

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var sortColors = function(nums) {
//     // 冒泡排序
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length - 1; j++) {
//             if (nums[j + 1] < nums[j]) {
//                 [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
//             }
//         }
//     }
//     return nums;
// };

// var sortColors = function(nums) {
//     // 直接在数组中进行操作
//     let i = 0, count = 0;
//     while(count < nums.length) {
//         if (nums[i] === 0){
//             nums.splice(i, 1);
//             nums.unshift(0);
//             i++;
//         } else if (nums[i] === 1) {
//             i++;
//         } else {
//             nums.splice(i, 1);
//             nums.push(2);
//         }
//         count++;
//     }
//     return nums;
// }

var sortColors = function(nums) {
    const len = nums.length;
    let left = 0, current = 0, right = len - 1;
    while(current < right) {
        if (nums[current] === 0) {
            [nums[left], nums[current]] = [nums[current], nums[left]];
            left++;
            current++;
        } else if (nums[current] === 1) {
            current++;
        } else {
            [nums[right], nums[current]] = [nums[current], nums[right]];
            right--;
            current++;
        }
    }
    return nums;
}