// 39. 组合总和
// 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

// candidates 中的数字可以无限制重复被选取。

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    const fn = (list, target, start) => {
        if (target === 0) {
            result.push(list);
            return;
        }
        if (target < 0) {
            return;
        }
        for (let i = start; i < candidates.length; i++){
            list.push(candidates[i]);
            fn(list.slice(), target - candidates[i], i);
            list.pop()
        }
    }
    return result;
};