// 20. 有效的括号
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length === 0) return true;
    if (s.length % 2 !== 0) return false;
    const list = [];
    const obj = {
        '(':')',
        '[':']',
        '{':'}',
    }
    for (let key of s) {
        if (obj[key]) {
            list.push(obj[key]);
        } else if (list[list.length - 1] === key) {
            list.pop();
        }
    }
    return list.length === 0 ? true : false;
};