const bt = require('./bt')
//递归版
/*
const postorder = (root) => {
    if(!root) return;
    postorder(root.left)
    postorder(root.right)
    console.log(root.val)
}
*/
//非递归
const postorder = (root) => {
    if(!root) return;
    const stack = [root]
    const outputstack = []
    while(stack.length) {
        const n = stack.pop()
        outputstack.push(n)
        if(n.left) stack.push(n.left)
        if(n.right) stack.push(n.right)
    }
    while(outputstack.length) {
        const n = outputstack.pop()
        console.log(n.val);
    }
}

postorder(bt)