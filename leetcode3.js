//无重复字符的最长子串
/* 思路：
    所有不包含重复字符的子串
    找出长度最长的
*/
/* 用双指针维护一个滑动窗口，用来剪切子串
不断移动右指针，遇到重复字符，就把左指针移动到重复字符的下一位
移动过程中，记录所有窗口的长度，并返回最大值*/
/* 时间O(n),空间O(m)m是不重复字符的个数
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let l = 0
    let res = 0
    const map = new Map()
    for (let r = 0; r < s.length; r++) {
        if(map.has(s[r]) && map.get(s[r]) >= l) {
            l = map.get(s[r]) + 1
        }
        res = Math.max(res,r-l+1)
        map.set(s[r],r)
    }
    return res
};