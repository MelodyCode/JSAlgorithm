//反转链表
/*思路：
    双指针一前一后遍历链表
    反转双指针
    时间复杂度：O(N)-->一层循环
    空间复杂度：O(1)-->仅用单个空间
*/
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    // write code here
    let cur = pHead
    let pre = null
    while (cur) {
        const tmp = cur.next
        cur.next = pre
        pre = cur
        cur = tmp
    }
    //注意cur === null才跳出循环，所以此时pre才是head
    return pre
}