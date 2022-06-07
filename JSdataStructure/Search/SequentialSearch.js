//顺序搜索
//遍历数组
//找到跟目标值相等的元素返回下标
//遍历结束后，如果没有搜索到目标值。返回-1
Array.prototype.SequentialSearch = function(item) {
    for(let i =0; i < this.length;i++) {
        if(this[i] === item) {
            return i
        }
    }
    return -1
}
const res = [1,2,3,4,5].SequentialSearch(3)
console.log(res)