//选择排序
//找到数组中的最小值，选中他并将其放置到第一位
//找到第二小的值，选中并放到第二位
//以此类推，执行n-1轮
//时间复杂度：O（N^2）
Array.prototype.SelectionSort = function() {
    for(let i = 0;i < this.length - 1;i++) {
        let indexmin = i
        for(let j = i;j < this.length;j++) {
            if (this[indexmin] > this[j]) {
                //找到最小值的下标
                indexmin = j
            }
        }
        if(indexmin !== i) {
            const temp = this[i]
            this[i] = this[indexmin]
            this[indexmin] = temp
        }
        
    }
   
}
let arr = [6,7,9,0,1,4,8,7]
arr.SelectionSort()
console.log(arr)