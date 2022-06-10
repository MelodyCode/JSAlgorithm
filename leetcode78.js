//子集
//递归模拟所有的情况
//保证接下来的数字都是他后面的数字
//收集所有到达递归终点的情况，并返回

//时间O（2^N）因为眉骨元素都有两种可能（存在or不存在），空间O（N）
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    let res = []
    //l为路径长度，start为起始位置
    const backtrack = function(path,l,start) {
        //递归结束
        if(path.length === l) {
            res.push(path)
            return;
        }
        for(let j = start;j < nums.length;j++) {
            backtrack(path.concat(nums[j]),l,j+1)
        }
    }
    for(let i = 0; i <=nums.length;i++) {
        backtrack([],i,0)
    }
    return res
};