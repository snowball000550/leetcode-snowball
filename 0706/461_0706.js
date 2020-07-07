// 461. 汉明距离
// 两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。

// 给出两个整数 x 和 y，计算它们之间的汉明距离。

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let result = 0;
    while(x !== 0 || y !== 0) {
        if ((x & 1) !== (y & 1)) {
            result += 1;
        }
        x >>= 1;
        y >>= 1;
    }
    return result;
};

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let v = x ^ y;
    let res = 0;
    while(v) {
        v = v & (v - 1);
        res++;
    }
    return res;
};