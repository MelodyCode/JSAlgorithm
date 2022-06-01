//两数相加
/* 思路：
    创建一个空链表
    遍历被相加的两个链表，模拟相加操作，将个位数追加道新链表上，十位数留到下一位去加
注意：
    对于链表问题，返回结果为头结点时，通常需要先初始化一个预先指针 pre，
    该指针的下一个节点指向真正的头结点head。使用预先指针的目的在于链表初始化时无可用节点值，
    而且链表构造过程需要指针移动，进而会导致头指针丢失，无法返回结果。

*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    const pre = new ListNode(0)
    let cur = pre
    let p1 = l1
    let p2 = l2
    //进位值
    let carry = 0
    while(p1 || p2) {
        const v1 = p1 ? p1.val:0
        const v2 = p2? p2.val:0
        let sum = v1 + v2 + carry
        carry = Math.floor(sum / 10)
        //实际存入链表
        sum = sum % 10
        //添加节点并移动p1,p2
        cur.next = new ListNode(sum % 10)
        if (p1) {
            p1 = p1.next
        }
        if (p2) {
            p2 = p2.next
        }
        cur = cur.next
    }
    if (carry === 1) {
        cur.next = new ListNode(carry)
    }
    return pre.next
    
};