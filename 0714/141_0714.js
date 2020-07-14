// 141. 环形链表
// 给定一个链表，判断链表中是否有环。

// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

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
    let slow = head;
    let fast = head;
    while(fast !== null) {
        if (fast.next === null) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
};

var hasCycle = function(head) {
    while (head !== null) {
        if (head.repeat) {
            return true
        } else {
            head.repeat = true;
            head = head.next;
        }
    }
    return false;
}