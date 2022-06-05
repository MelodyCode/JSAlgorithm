//路径总和
//深度优先遍历，记录当前路径的节点，叶子结点判断是否等于目标值
var hasPathSum = function(root, targetSum) {
    if (!root) return false
    let res = false
    const dfs = (n,s) => {
        if(!n.left && !n.right && s === targetSum) {
            res = true
        }
        if(n.left) dfs(n.left,s+n.left.val)
        if(n.right) dfs(n.right,s+n.right.val)
    }
        dfs(root,root.val)
        return res
};