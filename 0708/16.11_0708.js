// 面试题 16.11. 跳水板
// 你正在使用一堆木板建造跳水板。有两种类型的木板，其中长度较短的木板长度为shorter，长度较长的木板长度为longer。你必须正好使用k块木板。编写一个方法，生成跳水板所有可能的长度。

// 返回的长度需要从小到大排列。

/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function(shorter, longer, k) {
    if (k === 0) return [];
    let s = shorter * k;
    let l = longer * k;
    const minus = longer - shorter;
    if (minus === 0) {
        return [k * shorter];
    }
    const result = [s]
    for (let i = 1; i <= k; i++) {
        result.push(result[i - 1] + minus)
    }
    return result;
};