// 42. 接雨水
// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const left_list = new Array(height.length);
    const right_list = new Array(height.length);
    
    let count = 0;
    for (let i = 1; i < height.length; i++) {
        if (!left_list[i-1]){
            left_list[i-1] = 0;
        }
        left_list[i] = Math.max(left_list[i-1], height[i-1])
    }
    for (let j = height.length - 1; j >= 0; j--) {
        if (!right_list[j+1]){
            right_list[j+1] = 0;
        }
        right_list[j] = Math.max(right_list[j+1], height[j+1])
    }
    console.log(left_list, right_list)
    for (let i = 1; i < height.length; i++) {
        if (Math.min(left_list[i], right_list[i]) - height[i] > 0)
            count += Math.min(left_list[i], right_list[i]) - height[i];
    }
    return count;
};