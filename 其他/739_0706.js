// 739. 每日温度
// 请根据每日 气温 列表，重新生成一个列表。对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。

// 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

// 提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。


/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    const len = T.length;
    if (len === 0) return T;
    const result = [];
    const obj = {}
    let start = 0;
    while(start <= len) {
        for (let i = start + 1; i < len; i++) {
            if (!result[start]) result[start] = 0;
            if(T[i] <= T[start] && i < len - 1) {
                result[start] += 1;
            } else if(T[i] <= T[start] && i === len - 1){
                result[start] = 0;
            } else {
                result[start] += 1;
                break;
            }
        }
        start++;
    }
    result.push(0)
    return result;
};