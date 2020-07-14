// 350. 两个数组的交集 II
// 给定两个数组，编写一个函数来计算它们的交集。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    nums1 = nums1.sort((a, b) => a - b);
    nums2 = nums2.sort((a, b) => a - b);
    const len1 = nums1.length;
    const len2 = nums2.length;
    const result = [];
    let i = 0;
    let j = 0;
    while (i < len1 && j < len2) {
        if (nums1[i] < nums2[j]) {
            i++;
        } else if (nums1[i] > nums2[j]) {
            j++;
        } else {
            result.push(nums2[j]);
            i++;
            j++;
        }
    }
    return result;
};
