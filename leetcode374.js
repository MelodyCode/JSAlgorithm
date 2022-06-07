//猜数字大小
//------方法1
//分而治之：将一个问题分成多个和原问题相似的小问题；递归解决小问题，再将结果合并以解决原来的问题
//归并排序；快速排序
//思路：分：计算中间元素，分割数组；解：递归在较大或者较小数组进行二分搜索
//时间O（logN），空间O（logN）
/**
 * @param {number} n
 * @return {number}
 */
 var guessNumber = function(n) {
    const rec = (low,high) => {
        //递归结束条件
        if(low> high) {return;}
        let mid = Math.floor((low + high) /2)
        let res = guess(mid)
        if(res === 0) {
            return mid
        } else if(res === 1) {
            return rec(mid+1,high)
        } else {
            return rec(low,mid-1)
        }
    }
    return rec(1,n)
};
// --- 方法二：二分搜索
//时间O（logN）
var guessNumber = function(n) {
    let low = 1
    let high = n
    while(low <= high) {
        const mid = Math.floor((low + high) /2)
        const res = guess(mid)
        if(res === 0) {
            return mid;
        } else if(res ===1) {
            low = mid + 1
        } else {
            high = mid -1
        }
    }
};