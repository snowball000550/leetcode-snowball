# 3. 无重复字符的最长子串
# 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        cur_len = 0
        max_len = 0
        left = 0
        a = set()
        for i in range(len(s)):
            cur_len += 1
            while s[i] in a:
                # 出现重复项，移出最左字符
                a.remove(s[left])
                left += 1
                cur_len -= 1
            if cur_len > max_len:
                max_len = cur_len
            a.add(s[i])
        return max_len	