// 面试题 17.13. 恢复空格
// 哦，不！你不小心把一个长篇文章中的空格、标点都删掉了，并且大写也弄成了小写。像句子"I reset the computer. It still didn’t boot!"已经变成了"iresetthecomputeritstilldidntboot"。在处理标点符号和大小写之前，你得先把它断成词语。当然了，你有一本厚厚的词典dictionary，不过，有些词没在词典里。假设文章用sentence表示，设计一个算法，把文章断开，要求未识别的字符最少，返回未识别的字符数。

// 注意：本题相对原题稍作改动，只需返回未识别的字符数

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
var respace = function(dictionary, sentence) {
    const s_len = sentence.length;
    const dp = new Array(s_len + 1);
    let index = 0;
    dp[0] = 0;
    for (let i = 1; i <= s_len; i++) {
        dp[i] = dp[i - 1] + 1;
        for (let j = i; j >= 0; j--) {
            if (dictionary.indexOf(sentence.slice(j, i)) > -1){
                dp[i] = Math.min(dp[i], dp[j]);
            } else {
                dp[i] = Math.min(dp[i], dp[j] + i - j);
            }
        }
    }
    return dp[s_len];
};