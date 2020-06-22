# 2. 两数相加
# 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

# 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

# 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        start = ListNode(0)
        head = start
        carry = 0
        while(l1 or l2):
            val1 = l1.val if l1 else 0
            val2 = l2.val if l2 else 0
            val_all = val1 + val2 + carry
            carry = val_all / 10
            head.next = ListNode(val_all % 10)
            head = head.next

            if l1:
                l1 = l1.next
            if l2:
                l2 = l2.next
        if carry == 1:
            head.next = ListNode(1)

        return start.next