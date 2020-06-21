// 4. 寻找两个正序数组的中位数
// 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。

// 请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

// 你可以假设 nums1 和 nums2 不会同时为空。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let m = 0;
    let n = 0;
    const len1 = nums1.length;
    const len2 = nums2.length;
    const mid = Math.floor((len1+len2) / 2);
    let index = 0;
    const list = [];
    while(index <= mid){
        if ((nums1[m] || nums1[m] === 0) && (nums2[n] || nums2[n] === 0)){
            if (nums1[m] <= nums2[n]){
                list.push(nums1[m])
                m++;
            } else {
                list.push(nums2[n])
                n++;
            }
        } else if (nums1[m]) {
            list.push(nums1[m])
            m++;
        } else {
            list.push(nums2[n])
            n++;
        }
        
        index++;
    }
    console.log(list)
    if ((len1+len2) % 2 === 1){
        return list[list.length - 1];
    } else {
        return (list[list.length - 2]+list[list.length - 1]) / 2;
    }
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let m = 0;
    let n = 0;
    const len1 = nums1.length;
    const len2 = nums2.length;
    const mid = Math.floor((len1+len2) / 2);
    let index = 0;
    const list = [];
    while(index <= mid){
        let temp = 0;
        [m,n,temp] = getNextNum(nums1, nums2, m, n);
        list.push(temp)
        index++;
    }
    if ((len1+len2) % 2 === 1){
        return list[list.length - 1];
    } else {
        return (list[list.length - 2]+list[list.length - 1]) / 2;
    }
};

var getNextNum = function(nums1, nums2, m, n) {
    let num = 0;
    if ((nums1[m] || nums1[m] === 0) && (nums2[n] || nums2[n] === 0)){
            if (nums1[m] <= nums2[n]){
                num = nums1[m]
                m++;
            } else {
                num = nums2[n];
                n++;
            }
        } else if (nums1[m]) {
            num = nums1[m]
            m++;
        } else {
            num = nums2[n];
            n++;
        }
        console.log(m, n, num)
        return [m, n, num];
}