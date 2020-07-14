// 96. 不同的二叉搜索树
// 给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let result = new Array(n + 1).fill(0);
    result[0] = 1;
    result[1] = 1;
    for (let i = 2; i <=n; i++) {
        for (let j = 1; j <= i; j++) {
            result[i] += result[j - 1] * result[i - j];
        }
    }
    return result[n];
};

var numTrees = function(n) {
    let res = 1;
    for (let i = 0; i < n; i++) {
        res = 2 * res * (2 * i + 1) / (i + 2)
    }
    return res;
};
