// 58.面试题 02.01. 移除重复节点
// 编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。

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
var removeDuplicateNodes = function(head) {
    if (head === null) return null;
    let prev = head;
    let node = head.next;
    const obj = {};
    obj[head.val] = true;
    while(node) {
        if (obj[node.val]) {
            prev.next = node.next;
        } else {
            obj[node.val] = true;
            prev = prev.next;
        }
        node = node.next;
    }
    return head;
};