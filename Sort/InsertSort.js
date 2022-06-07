//插入排序
//从第二个数开始往前比
//比他大就往后排
//以此类推进行到最后一个数
//时间 O（N^2）
Array.prototype.InsertSort = function() {
    for(let i = 1;i < this.length;i += 1) {
        const temp = this[i];
        let j = i;
        while(j > 0) {
            if(this[j-1] > temp) {
                this[j] = this[j-1]
            } else {
                break;
            }
            j -= 1
        }
        //插入的位置
        this[j] = temp
    
    }
    
}
let arr = [6,7,9,0,1,4,8,7]
arr.InsertSort()
console.log(arr)