//贪心算法--核心：期盼每个阶段的局部最优选择，从而达到全局最优；结果并不一定是最优
//分饼干
//局部最优：既能满足孩子，而且消耗最少；
//先将“较小的饼干”分给“胃口最小”孩子
//对饼干数组和胃口数组升序排序；遍历饼干数组，找到满足第一个孩子的饼干；
//时间O（NlogN）,空间O（1）
var findContentChildren = function(g, s) {
    //升序，当数字是按字母顺序排列时"40"将排在"5"前面。使用数字排序，你必须通过一个函数作为参数来调用。
    //时间复杂度O（NlogN）
    const sortFunc = (a,b) => {
        return a - b
    }
    s.sort(sortFunc)//饼干
    g.sort(sortFunc)
    let i = 0
    s.forEach(n=>{
        if(n >= g[i]) {
            i += 1
        }
    })
    return i
};