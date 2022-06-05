//二叉树的中序遍历
//时间空间O（N）
var inorderTraversal = function(root) {
    if(!root) {return []}
    const stack = []
    let p = root
    const res = []
    while(stack.length || p) {
        while(p) {
            stack.push(p)
            p = p.left
        }
        let n = stack.pop()
        res.push(n.val)
        p = n.right
    }
    return res
};