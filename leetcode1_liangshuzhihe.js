//两数之和
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//传统
 var twoSum = function(nums, target) {
    let result = []
    for (let i = 0;i < nums.length;i++) {
        for (let j = i + 1;j < nums.length;j++) {
            if (nums[i] + nums[j] === target) {
                result.push(i)
                result.push(j)
            }
        }
    }
    return result
};

//时间复杂度O(N),利用字典
var twoSum = function(nums, target) {
    let map = new Map()
    let res = []
    for(let i = 0;i < nums.length;i++) {
        let t = nums[i]
        let t2 = target - t
        if (map.has(t2)) {
            
            res.push(map.get(t2))
            res.push(i)
            return res
        } else {
             map.set(nums[i],i);
        }
    }

};
