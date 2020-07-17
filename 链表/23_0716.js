// 234. 回文链表
// 请判断一个链表是否为回文链表。

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
var isPalindrome = function(head) {
    const list = [];
    while (head !== null) {
        list.push(head.val);
        head = head.next;
    }
    if (list.length <= 1) return true;
    let i = 0;
    let j = list.length - 1;
    while (i < j) {
        if(list[i] !== list[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};

var isPalindrome = function(head) {
    let fast = head;
    let slow = head;
    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let dummy = new ListNode(0);
    dummy.next = null;
    while(slow !== null) {
        let temp = slow.next;
        slow.next = dummy.next;
        dummy.next = slow;
        slow = temp;
    }
    slow = head;
    dummy = dummy.next;
    while(dummy !== null) {
        if (slow.val !== dummy.val) return false;
        slow = slow.next;
        dummy = dummy.next;
    }
    return true;

}