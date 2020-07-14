// 48. 旋转图像
// 给定一个 n × n 的二维矩阵表示一个图像。

// 将图像顺时针旋转 90 度。

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let low = 0;
    let high = matrix.length - 1;
    const mid = Math.floor((low + high) / 2);
    for (let i = 0; i <= mid; i++){
        matrix = transformMatrix(matrix, low + i, high - i);
    }
    return matrix;
};

var transformMatrix = function(matrix, low, high) {
    for (let i = 0; i < high - low; i++) {
        let temp = matrix[low][low + i];
        matrix[low][low + i] = matrix[high-i][low];
        matrix[high-i][low] = matrix[high][high - i];
        matrix[high][high - i] = matrix[low + i][high];
        matrix[low + i][high] = temp;
    }
    return matrix;
}
