// 56. 合并区间
// 给出一个区间的集合，请合并所有重叠的区间。


var merge = function(intervals) {
    if (intervals.length === 0) return intervals;
    intervals.sort((a, b) => a[0] - b[0]);
    const len = intervals.length;
    let start = 0;
    let i = 1;
    const result = [intervals[0]];
    while(i < len) {
        if (checkIsSameRegion(intervals[i], result[start])) {
            result[start]=combine(result[start],intervals[i]);
        } else {
            start = start + 1;
            result[start] = intervals[i];
        }
        i += 1;
    }
    return result
}

var checkIsSameRegion = function(list1, list2){
    if (list2[1] < list1[0]) {
        return false;
    }
    return true;
}

var combine = function(list1, list2){
    const min = Math.min(list2[0], list1[0]);
    const max = Math.max(list1[1], list2[1]);
    return [min, max];
}