// 125. 验证回文串
// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const s1 = s.replace(/[^0-9a-zA-Z]/g, '').toLocaleLowerCase();
    let i = 0;
    let j = s1.length - 1; 
    while(i < j){
        if(s1[i] !== s1[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
};