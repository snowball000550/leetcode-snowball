const data1 = ['#a']
const data2 = ['#a','##b']
const data3 = ['#a','#b','##c']
const data4 = ['#a','##b','###c','#d']
const data5 = ['#a','##b','###c','#d','##e']
const data6 = ['#a','# #b','## #c','#d','## e','###f','# ##g', '##h','##i', '###j']

const data7 = []
const data8 = ['#a','b','## #c']
const data9 = ['#a','##b','###c','#d','###e',]
const data10 = ['a']


// 检查标题中是否以#开头，#长度是否超过6，是否包含至少一个空格
var checkDataFormatt = function(s){
    let amount = 0;
    if (s[0] !== '#') return false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '#') {
            if(i === s.length - 1) {
                return true;
            }
            amount += 1;
        } else {
            if (s[i + 1] = ' ' && i <= 6) {
                return true;
            } else {
                return false;
            }
        }
    }
}


var setNewOrderArray = function(list, item){
    let count1 = getNumOfLetterOfString(item, '#') - 2;
    let count2 = list[list.length - 1].split('.').length;
    if (count1 - count2 <= 1) {
        list[count1] = list[count1] ? list[count1] + 1 : 1;
    } else {
        for (let i = 0; i < count1 - count2; i++) {
            // TODO:补充跳级序号
        }
    }
}


// only order
var parseMD = function(data){
    let orderArr = [];
    const order_list = [];
    let new_order = '';
    const len = data.length;
    try {
        if (len === 0) {
            return [];
        } else {
            for(let i = 0; i < len; i++){
                if (!checkDataFormatt(data[i])){
                    continue;
                } else {
                    [new_order, order_list] = setNewOrderArray(order_list, data[i])
                    orderArr.push(...new_order);
                }
                    
            }
        }
        return orderArr;
    }
    catch(err){
        alert(err);
        return;
    }   
}



       // let order = '';
                    // let index = getSharpNum(data[i]) - 1;
                    // if ((i >= 1 && getSharpNum(data[i]) - getSharpNum(data[i-1]) > 1)) {
                        
                    // }
                    // if ( i === 0 || !orderArr[index-1] || getSharpNum(data[i]) - getSharpNum(data[i-1]) === 1 ) {
                    //     orderArr[index-1] = 1;
                    // } else {
                    //     orderArr[index-1] += 1;
                    // }
                    // for (let i = 0; i < index; i++) {
                    //     order += index ===1 || i === index - 1 ? orderArr[i] : orderArr[i] + '.';
                    // }





// with title
// var parseMD = function(data) {
//     const orderArr = [];
//     const newArr = [];
    
//     try {
//         if (data.length === 0) {
//             return [];
//         }
//         if (data.length === 1 && data[0].split('#').length === 2) {
//             return [{
//                 title: data[0].split('#').pop(),
//                 order: 1
//             }];
//         } else if (data[0].split('#').length === 1){
//             throw '格式错误';
//         }
//         for(let i = 0; i < data.length; i++){
//                 let order = '';
//                 let index = data[i].split('#').length - 1;
//                 if ((i >= 1 && data[i].split('#').length - data[i-1].split('#').length > 1) || data[i].split('#').length === 0) {
//                     throw '格式错误';
//                 }
//                 if ( i === 0 || !orderArr[index-1] || data[i].split('#').length - data[i-1].split('#').length === 1 ) {
//                     orderArr[index-1] = 1;
//                 } else {
//                     orderArr[index-1] += 1;
//                 }
//                 for (let i = 0; i < index; i++) {
//                     order += index ===1 || i === index - 1 ? orderArr[i] : orderArr[i] + '.';
//                 }
//                 newArr.push({
//                     title: data[i].split('#').pop(),
//                     order
//                 })
//             }
//             return newArr;
//     }
//     catch(err){
//         alert(err);
//         return;
//     }
// }