160. 相交链表
编写一个程序，找到两个单链表相交的起始节点。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

var getIntersectionNode = function(headA, headB) {
    while(headA) {
        headA.repeat = true;
        headA = headA.next;
    }
    while(headB) {
        if (headB.repeat) return headB;
        headB = headB.next;
    }
}