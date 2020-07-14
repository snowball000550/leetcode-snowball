// 108. 将有序数组转换为二叉搜索树
// 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

// 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    const fn = (left, right) => {
        if (left > right) {
            return null;
        }
        let mid = Math.floor((right + left) / 2);
        console.log(mid)
        let tree = new TreeNode(nums[mid]);
        tree.left = fn(left, mid - 1);
        tree.right = fn(mid + 1, right)
        return tree;
    }
    return fn(0, nums.length - 1);
};

