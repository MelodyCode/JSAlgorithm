//最小覆盖子串
/* 用双指针维护一个滑动窗口，
移动右指针，找到包含T的子串，移动左指针，尽量减少包含T的子串的长度
循环上述过程，找到最小长度的子串
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    let l = 0;
    let r = 0;
    let need = new Map();
    //初始化
    for(let c of t) {
        need.set(c,need.has(c)? need.get(c)+1:1);
    }
    let needType = need.size;
    let res = ''
    while(r < s.length) {
        const c1 = s[r];
        if(need.has(c1)) {
            need.set(c1,need.get(c1)-1)
            if (need.get(c1)===0) needType -= 1
        }
        while(needType === 0){
            const newres = s.substring(l,r+1)
            if (!res || newres.length < res.length) res = newres
            let c2 = s[l]
            if(need.has(c2)) {
                need.set(c2,need.get(c2)+1)
                if (need.get(c2)===1) needType += 1
            }
            l += 1
        }
        r += 1
    }
    return res
};