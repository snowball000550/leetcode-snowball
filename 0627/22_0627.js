// 22. 括号生成
// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let list = []
    const fn = (left, right, res) => {
        if (left === 0 && right === 0){
            list.push(res)
            return;
        }
        if (left > 0){
            fn(left - 1, right, res + '(')
        } 
        if (right > left) {
            fn(left, right - 1, res + ')')
        }
    }
    fn(n, n, '');
    return list;

};

// var check = function(s) {
//     let index = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === '(') {
//             index += 1;
//         } else {
//             index -= 1;
//         }
//         if (index < 0) {
//             return false;
//         }
//     }
//     return true;
// }