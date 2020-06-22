const data1 = ['#a']
const data2 = ['#a','##b']
const data3 = ['#a','#b','##c']
const data4 = ['#a','##b','###c','#d']
const data5 = ['#a','##b','###c','#d','##e']
const data6 = ['#a','# #b','## #c','#d','## e','###f','# ##g', '##h','##i', '###j']

const data7 = []
const data8 = ['#a','b','## #c']
const data9 = ['#a','##b','###c','#d','###e',]


parseMD(data)
// only order
var parseMD = function(data){
    const orderArr = [];
    const newArr = [];
    if (data.length === 0) {
        return [];
    }
    if (data.length === 1 && data[0].split('#').length === 2) {
        return [1];
    }
    for(let i = 0; i < data.length; i++){
        let order = '';
        let index = data[i].split('#').length - 1;
        if ((i >= 1 && data[i].split('#').length - data[i-1].split('#').length > 1) || data[i].split('#').length === 0) {
            return 'error'
        }
        if ( i === 0 || !orderArr[index-1] || data[i].split('#').length - data[i-1].split('#').length === 1 ) {
            orderArr[index-1] = 1;
        } else {
            orderArr[index-1] += 1;
        }
        for (let i = 0; i < index; i++) {
            order += index ===1 || i === index - 1 ? orderArr[i] : orderArr[i] + '.';
        }
        newArr.push(order)
    }
    return newArr;
}

// with title
var parseMD = function(data) {
    const orderArr = [];
    const newArr = [];
    for(let i = 0; i < data.length; i++){
        let order = '';
        let index = data[i].split('#').length - 1;
        if ((i >= 1 && data[i].split('#').length - data[i-1].split('#').length > 1) || data[i].split('#').length === 0) {
            return 'error'
        }
        if ( i === 0 || !orderArr[index-1] || data[i].split('#').length - data[i-1].split('#').length === 1 ) {
            orderArr[index-1] = 1;
        } else {
            orderArr[index-1] += 1;
        }
        for (let i = 0; i < index; i++) {
            order += index ===1 || i === index - 1 ? orderArr[i] : orderArr[i] + '.';
        }
        newArr.push({
            title: data[i].split('#').pop(),
            order
        })
    }
    return newArr;
}