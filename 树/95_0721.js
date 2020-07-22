// 95. 不同的二叉搜索树 II
// 给定一个整数 n，生成所有由 1 ... n 为节点所组成的 二叉搜索树 。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n === 0) return [];
    const fn = (low, high) => {
        if (low > high) return [null];
        if (low === high) return [new TreeNode(low)];
        const res = [];
        for (let i = low; i <= high; i++) {
            let leftTrees = fn(low, i - 1);
            let rightTrees = fn(i + 1, high);
            for (let leftTree of leftTrees) {
                for (let rightTree of rightTrees) {
                    const root = new TreeNode(i);
                    root.left = leftTree;
                    root.right = rightTree;
                    res.push(root);
                }
            }
        }
        return res;
    }
    return fn(1, n);
};
