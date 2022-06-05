//二叉树的最大深度
//求最大深度，使用dfs；记录每个节点所在层级，找出最大层级
//时间O（N）
//空间：函数调用函数，形成堆栈，最好O（logn），最差O（N）
var maxDepth = function(root) {
    let res = 0
    const dfs = (n,l) => {
        if(!n) {return;}
        if(!n.left && !n.right) res = Math.max(res,l)
        dfs(n.left,l+1)
        dfs(n.right,l+1)
    } 
    dfs(root,1)
    return res
};