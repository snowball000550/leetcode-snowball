// 33. 搜索旋转排序数组
// 假设按照升序排序的数组在预先未知的某个点上进行了旋转。

// ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

// 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

// 你可以假设数组中不存在重复的元素。

// 你的算法时间复杂度必须是 O(log n) 级别。


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 // 虽然做了三个小时但是没看答案,开心!
var search = function(nums, target) {
    const len = nums.length;
    if (len === 0) return -1;
    let mid = Math.floor(len / 2);
    let index = 0;
    if (nums[mid] === target) {
        return mid;
    }
    return getIndexOf(nums, mid, target, index);
    
};

var getIndexOf = function(list, mid, target, index) {
    console.log(list)
    if (list.length === 1) {
        if (list[0] === target){
            return index;
        } else {
            return -1;
        }
    }
    // 判断目标值在左右哪部分
    if (checkTargetInSortedList(list, target, mid) === 0) {
        return getIndexOf(list.slice(0, mid), Math.floor(list.slice(0, mid).length / 2), target, index)
    } else {
        index += mid;
        return getIndexOf(list.slice(mid), Math.floor(list.slice(mid).length / 2), target, index)
    }
}

var checkTargetInSortedList = function(list, target, mid) {
    if (!checkIsReverse(list.slice(0, mid)) && target >= list[0] && target <= list[mid - 1]) {
        return 0;
    }
    if (!checkIsReverse(list.slice(0, mid)) && (target < list[0] || target > list[mid - 1])) {
        return mid;
    }
    if (!checkIsReverse(list.slice(mid)) && target >= list[mid] && target <= list[list.length - 1]){
        return mid;
    }
    if (!checkIsReverse(list.slice(mid)) && (target < list[mid] || target > list[list.length - 1])){
        return 0;
    }
}


var checkIsReverse = function(list){
    if (list.length === 1) return false;
    if (list[0] < list[list.length - 1]) {
        return false;
    } else {
        return true;
    }
}