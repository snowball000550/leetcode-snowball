// 17. 电话号码的字母组合
// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。


/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits === '') return [];
    const obj = {
        1: '',
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };
    const res_arr = [];
    for (let key of digits) {
        const w = obj[key];
        const w_list = w.split('');
        if (res_arr.length > 0){
            const arr_temp = [];
            for (let i = 0; i < res_arr.length; i++){
                for (let j = 1; j < w_list.length; j++) {
                        arr_temp.push(res_arr[i] + w[j])
                }
                res_arr[i] += w[0]
            }
            res_arr.push(...arr_temp);
        } else {
            res_arr.push(...w_list);
        }
    }
    return res_arr;
};