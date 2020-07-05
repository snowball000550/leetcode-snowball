// 378. 有序矩阵中第K小的元素
// 给定一个 n x n 矩阵，其中每行和每列元素均按升序排序，找到矩阵中第 k 小的元素。
// 请注意，它是排序后的第 k 小元素，而不是第 k 个不同的元素。

 /**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */

var kthSmallest = function(matrix, k) {
    let len1 = matrix.length;
    let len2 = matrix[0].length;
    let list = [];
    for (let i = 0; i < len1; i++) {
        for (let j = 0; j < len2; j++) {
            list.push(matrix[i][j]);
        }
    }
    list.sort((a,b) => a - b);
    return list[k - 1]
}