// 49. 字母异位词分组
// 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const result = [];
    const obj = {};
    let index = 0;
    for (let i = 0; i < strs.length; i++) {
        const temp_value = strs[i].split('').sort().join('');
        if (!obj[temp_value] && obj[temp_value] !== 0) {
            obj[temp_value] = [];
        }
        obj[temp_value].push(strs[i])
    }
    for (let item in obj){
        result.push(obj[item]);
    }
    return result;
};