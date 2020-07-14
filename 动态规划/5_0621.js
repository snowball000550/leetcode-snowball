
// 5. 最长回文子串
// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function(s) {
//     if (s === '') {
//         return s;
//     }
//     let result = s[0];
//     const s1 = '#' + s.split('').join('#') + '#';
//     for (let i = 0; i < s1.length; i++){
//         let m = 1;
//         while(i - m >= 0 && i + m < s1.length){
//             if (s1[i-m] === s1[i+m]){
//                 if (m >= result.length){
//                     result = s1.substring(i-m, i+m).split('#').join('');
//                 }
//                 m++
//             } else {
//                 break;
//             }
//         }
//     }
//     return result;
// };

var longestPalindrome = function(s){
    if (s === '') return '';
    let result = s[0];
    const len = s.length;
    const dp = [];
    
    for (let i = len - 1;i >= 0; i--){
        dp[i] = []
        for (let j = i; j < len; j++){
            if (i === j) dp[i][j] = true;
            else if (j - i === 1 && s[i] === s[j]) dp[i][j] = true;
            else if (dp[i+1][j-1] && s[i] === s[j]){
                dp[i][j] = true;
            }
            if (dp[i][j] && j - i + 1 > result.length){
                result = s.slice(i, j+1);
            }
        }
    }
    return result;
}

// var checkIsPalindrome = function(s) {
//     if (s === '') {
//         return true;
//     }
//     if (s.length % 2 === 0) {
//         const temp1 = s.substring(0, s.length / 2);
//         const temp2 = s.substring(s.length / 2);
//         if (temp1.split('').reverse().join('') === temp2){
//             return true;
//         } else {
//             return false;
//         }
//     } else {
//         const mid = (s.length - 1) / 2;
//         for (let i = 1; i <= mid; i++) {
//             if (s[mid - i] !== s[mid + i]){
//                 return false;
//             }
//         }
//         return true;
//     }
// }