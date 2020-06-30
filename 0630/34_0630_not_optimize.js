// 34. 在排序数组中查找元素的第一个和最后一个位置
// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

// 你的算法时间复杂度必须是 O(log n) 级别。

// 如果数组中不存在目标值，返回 [-1, -1]。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const mid = Math.floor(nums.length / 2);
    const left = searchIndex(nums, target, mid, 0);
    const right = searchLastIndex(nums, target, mid, 0);
    return[left, right];
};

var searchIndex = function(list, target, mid, index) {
    if (list.length === 0) return -1;
    if (list.length === 1) {
        if (list[0] === target) {
            return index;
        } else {
            return -1;
        }
    }
    if (target < list[mid - 1]) { 
        return searchIndex(list.slice(0, mid), target, Math.floor(list.slice(0, mid).length / 2), index);
    } else if (target > list[mid - 1]) {
        index += mid;
        return searchIndex(list.slice(mid), target, Math.floor(list.slice(mid).length / 2), index);
    } else {
        return searchIndex(list.slice(0, mid), target, Math.floor(list.slice(0, mid).length / 2), index);
    }
}

var searchLastIndex = function(list, target, mid, index) {
    if (list.length === 0) return -1;
    if (list.length === 1) {
        if (list[0] === target) {
            return index;
        } else {
            return -1;
        }
    }
    if (target < list[mid]) {
        return searchLastIndex(list.slice(0, mid), target, Math.floor(list.slice(0, mid).length / 2), index);
    } else if (target > list[mid]) {
        index += mid;
        return searchLastIndex(list.slice(mid), target, Math.floor(list.slice(mid).length / 2), index);
    } else {
        index += mid;
        return searchLastIndex(list.slice(mid), target, Math.floor(list.slice(mid).length / 2), index);
    }
}
