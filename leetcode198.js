//打家劫舍
//f(k) = 从前k个房屋中能偷窃到的最大数额
//A(k) = 第k个房屋的钱数
//f(k) = max(f(k-2) + Ak,f(k-1))
var rob = function(nums) {
    if (nums.length === 0) {return 0}
    let dp0 = 0
    let dp1 = nums[0]
    for (let i = 2; i <= nums.length;i++) {
        const dp2 = Math.max(dp0+nums[i-1],dp1)
        dp0 = dp1
        dp1 = dp2
    }
    return dp1
};