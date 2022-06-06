//反转二叉树
//先反转左右子树，再将子树换个位置
//分：获取左右子树
//解：递归的反转左右子树
//合：将反转后的左右子树换个位置放到根节点上
//时间O（N），N为节点数量，空间O（N），准确点为 O（H），H为树的高度
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var invertTree = function(root) {
    if(!root) {return null;}
    return {
        val:root.val,
        left:invertTree(root.right),
        right:invertTree(root.left)
    }
};;