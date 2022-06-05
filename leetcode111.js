//二叉树的最小深度
//广度优先遍历，遇到叶子结点，停止遍历，返回节点层级
//时间O（N），空间O（N），N为节点数量
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var minDepth = function(root) {
    if(!root) {return 0;}
    let res = 1
        const q = [[root,1]]
        while(q.length) {
            const [n,l] = q.shift()
            if(!n.left && !n.right) return l;
            if(n.left) q.push([n.left,l+1])
            if(n.right) q.push([n.right,l+1])
            
        }
     
    
    

};