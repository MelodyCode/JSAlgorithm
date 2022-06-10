//回溯算法
//什么问题适合用回溯算法：有很多路，有死路也有出路；通常要递归模拟
//全排列
//思路：用递归模拟出所有的情况
//遇到包含重复元素的情况就回溯
//收集所有到达递归终点的情况，并返回
//时间O（N！）空间O（N），N为递归的层数
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    const res = []
    const backtrack = (path) => {
        //递归终点
        if(path.length === nums.length) {
            res.push(path)
            return;
        }
        nums.forEach(n => {
            //死路
            if(path.includes(n)) {return;}
            backtrack(path.concat(n))
        })
    }
    backtrack([])
    return res


};

console.log(permute([1,2,3]))