//爬楼梯
//定义子问题Fn = F(n-1) + F(n-2)
//反复执行子问题，从2到n
//时间,空间O(N)
var climbStairs = function(n) {
    if(n < 2) {return 1}
    const dp = [1,1]
    for(let i = 2;i <= n;i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
};
//优化，降低空间复杂度

var climbStairs = function(n) {
    if(n < 2) {return 1}
    let dp0 = 1
    let dp1 = 1
    for(let i = 2;i <= n;i++) {
        const temp = dp0
        dp0 = dp1;
        dp1 = dp1 + temp
    }
    return dp1
};