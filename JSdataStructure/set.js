//去重
const arr = [1,1,2,2]
const arr2 = [...new Set(arr)]

console.log(arr2)

//判断元素是否在集合中
const set = new Set(arr)
const has = set.has(1)

//求交集
let arr3 = [2,3]
const set2 = new Set([arr3])
//Set里面没有求交集的函数，将set转化为数组
//实例化一个新的集合set3
//const set3 = new Set([...set].filter(item => set2.has(item)));
const intersection = arr.filter(item => arr3.has(item))
console.log("交集",intersection)
//差集
const difference = arr.concat(arr3).filter(item => !arr.includes(item) || !arr3.includes(item))
console.log("差集",difference)
//并集
const union = arr.concat(arr3.filter(item => !arr.includes(item)))
console.log("差集",union)