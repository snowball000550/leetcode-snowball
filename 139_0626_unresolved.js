// 139. 单词拆分
// 给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。

// 说明：

// 拆分时可以重复使用字典中的单词。
// 你可以假设字典中没有重复的单词。

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 // TODO:timeout
var wordBreak = function(s, wordDict) {
    const wordSet = new Set(wordDict);
    const check = (s, wordSet, start) => {
        if (start > s.length - 1) return true;
        for (let i = start + 1; i <= s.length; i++) {
            const word = s.slice(start, i)
            console.log(word)
            if (wordSet.has(word) && check(s, wordSet, i)){
                return true;
            }
        }
        return false;
    }
    return check(s, wordSet, 0);
};
