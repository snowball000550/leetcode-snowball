142. 环形链表 II
给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let fast = head;
    let slow = head;
    while(fast){
        if(fast.next === null) return null;
        slow = slow.next;
        fast = fast.next.next;
        if(fast === slow){
            fast = head;
            while(true){
                if (fast === slow) {
                    return slow;
                }
                fast = fast.next;
                slow = slow.next;
            }
        }
    }
    return null;
};