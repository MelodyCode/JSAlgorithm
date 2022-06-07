//归并排序
//分：时间O（logN）；合O（N）；分合嵌套关系总O（N*logN）
//分：把数组分成两半，再递归地对子数组进行分操作，知道分成一个个单独的数
//合：把两个数合并为有序数组，在对有序数组进行合并，直到全部子数合并为一个完整数组
//合并两个有序数组
//新建一个空数组res，用于存放最终排序后的数组
//比较两个有序数组的头部，较小者出队并推入res中
//若两个数组还有值，就重复第二步
Array.prototype.MergeSort = function() {
    const rec = (arr) => {
        //分：
        if(arr.length === 1) {return arr}
        const mid  = Math.floor(arr.length/2)
        const left = arr.slice(0,mid)
        const right = arr.slice(mid,arr.length)
        const orderleft = rec(left)
        const orderright = rec(right)
        //合
        const res = []
        
        while(orderleft.length || orderright.length) {
            if(orderleft.length && orderright.length) {
                res.push(orderleft[0] < orderright[0] ? orderleft.shift():orderright.shift())
            } else if(orderleft.length) {
                res.push(orderleft.shift())
            } else if(orderright.length) {
                res.push(orderright.shift())
            }
        }
        return res

    }
    
    const res = rec(this)
    //将排序后的结果拷贝到原来的实例里
    res.forEach((n,i) => {
        this[i] = n
    });

}
let arr = [6,7,9,0,1,4,8,7]
arr.MergeSort()
console.log(arr)