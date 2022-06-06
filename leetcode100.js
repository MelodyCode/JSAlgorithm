//相同的树
//两个树相同：根节点相同，左子树相同，右子树相同
//分：获取两个树的左子树和右子树
//解：递归的判断两个树的左子树是否相同，右子树是否相同
//合：将上述结果合并，如果根节点的值也相同，树就相同
//时间空间O（N）
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
    //判断两个树是否为空
    if(!p && !q) return true
    if(p && q && p.val === q.val && 
    isSameTree(p.left,q.left) && 
    isSameTree(p.right,q.right)) {
        return true
    } else {
        return false
    }
};