// 105. 从前序与中序遍历序列构造二叉树
// 根据一棵树的前序遍历与中序遍历构造二叉树。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(inorder.length === 0) return null;
    let root = new TreeNode(preorder[0]);
    let mid = inorder.indexOf(preorder[0]);
    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))
    return root;
};

var buildTree = function(preorder, inorder) {
    return helper(preorder, 0, preorder.length - 1, inorder, 0)
}

var helper = function(preorder, p_start, p_end, inorder, i_start) {
    if (p_start > p_end) return null;
    const root_val = preorder[p_start];
    const root = new TreeNode(root_val);
    const mid = inorder.indexOf(root_val);
    const leftNum = mid - i_start;

    root.left = helper(preorder, p_start + 1, p_start + leftNum, inorder, mid - 1);
    root.right = helper(preorder, p_start + leftNum + 1, p_end, inorder, mid + 1);
    return root;
}