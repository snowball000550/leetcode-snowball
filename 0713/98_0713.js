// 98. 验证二叉搜索树
// 给定一个二叉树，判断其是否是一个有效的二叉搜索树。

// 假设一个二叉搜索树具有如下特征：

// 节点的左子树只包含小于当前节点的数。
// 节点的右子树只包含大于当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isValidBST = function(root) {
//     const fn = (r, low, high) => {
//         if (r === null) return true;
//         if (r.val <= low || r.val >= high) return false;
//         return fn(r.left,low, r.val) && fn(r.right, r.val, high)
//     }
//     return fn(root, -Infinity, Infinity);
// }

var isValidBST = function(root) {
    let stack = [];
    let min = -Infinity;
    while (stack.length > 0 || root !== null) {
        while(root !== null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (root.val <= min) return false;
        min = root.val;
        root = root.right
    }
    return true;
}