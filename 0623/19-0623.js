// 19. 删除链表的倒数第N个节点
// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let new_head = new ListNode(0);
    new_head.next = head;
    let p = new_head;
    let q = new_head;
    while(n) {
        p = p.next;
        n--;
    }
    while(p.next){
        p = p.next;
        q = q.next;
    }

    q.next = q.next.next;
    return new_head.next;
};