// 23. 合并K个排序链表
// 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    console.log(lists)
    const len = lists.length;
    if (len === 0) {
        return null;
    }
    let res = lists[0];
    for (let i = 1; i < len; i++) {
        res = mergeTwoList(res, lists[i])
    }
    return res;
};

var mergeTwoList = (l1, l2) => {
    if (l1 === null) {
        return l2;
    }
    if (l2 === null) {
        return l1;
    }
    if (l1.val < l2.val) {
        l1.next = mergeTwoList(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoList(l1, l2.next);
        return l2;
    }
}