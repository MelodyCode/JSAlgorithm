//环形链表
/* 一快一慢的指针遍历链表，指针能相逢，就返回true，遍历结束后未相逢就false*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    let p1 = head
    let p2 = head
    while (p1 && p2 && p2.next) {

        p1 = p1.next
        p2 = p2.next.next
        if(p1 === p2) {
            return true
        } 

    }
    return false
};