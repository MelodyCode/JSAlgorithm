//合并两个有序链表
//创建一个新链表，作为返回结果
//用指针表里两个有序链表，并比较两个链表的当前节点，较小者先进入新链表，并将指针后移一步
//链表遍历结束，返回新链表
//时间O(M + N)M，N是两个链表长度,空间O（1）--只新建一个指针
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {

    let res = new ListNode(0)
    let p = res
    let p1 = list1
    let p2 = list2
    while(p1 && p2) {
        if(p1.val < p2.val) {
            p.next = p1
            p1 = p1.next
        } else {
            p.next = p2
            p2 = p2.next
        }
        p = p.next
    }
    if(p1) {
        p.next = p1
    }
    if(p2) {
        p.next = p2
    }
    return res.next
};