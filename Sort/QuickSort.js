//快速排序
//分区：从数组中任意选择一个“基准”，所有比基准小的元素放在基准前面，比基准大的元素放在基准的后面
//递归：递归的在基准前后的子数组进行分区
//递归时间复杂度O（logN），分区O（N），总体O（N*logN）
Array.prototype.QuickSort = function() {
    const rec = (arr) => {
        if(arr.length === 1) {return arr}
        const left = [];
        const right = [];
        //基准
        const mid = arr[0];
        //分区
        for(let i = 1;i < arr.length; i+=1) {
            if(arr[i] < mid) {
                left.push(arr[i])
            } else {
                right.push(arr[i])
            }
        }
        return [...rec(left),mid,...rec(right)]

    }
    const res = rec(this)
    res.forEach((n,i) => {
        this[i] = n
    });
    
}
const arr = [2,4,5,3,1]
arr.QuickSort();
console.log(arr)