// 581. 最短无序连续子数组
// 给定一个整数数组，你需要寻找一个连续的子数组，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。

// 你找到的子数组应是最短的，请输出它的长度。

// 示例 1:

// 输入: [2, 6, 4, 8, 10, 9, 15]
// 输出: 5
// 解释: 你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
// 说明 :

// 输入的数组长度范围在 [1, 10,000]。
// 输入的数组可能包含重复元素 ，所以升序的意思是<=。

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    const len = nums.length;
    if (len === 1) return 0;
    let i = 0;
    let j = len - 1;
    let start = null;
    let end = null;
    const sorted_list = nums.slice().sort((a, b) => a - b);
    while (i <= len - 1) {
        if (nums[i] !== sorted_list[i]) {
            break;
        }
        i++;
    }
    while (j >= 0) {
        if (nums[j] !== sorted_list[j]) {
            break;
        }
        j--;
    }
    return j - i > 0 ? j - i + 1 : 0;
}