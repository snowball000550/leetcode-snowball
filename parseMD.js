const data = [
	'#a','##b','###c','#d','##e','###f','###g','#h'
]

// only order
var parseMD = function(data){
    const orderArr = [];
    const newArr = [];
    data.forEach((item, i) => {
        let hn = '';
        let index = item.split('#').length - 1;
        if ( i === 0 || !orderArr[index-1] || item.split('#').length > data[i-1].split('#').length ) {
            orderArr[index-1] = 1;
        }
        else {
            orderArr[index-1] += 1;
        }
        for (let i = 0; i < index; i++) {
            hn += index ===1 || i === index - 1 ? orderArr[i] : orderArr[i] + '.';
        }
        newArr.push(hn)
    })
    return newArr;
}

// with title
var parseMD = function() {
    const orderArr = [];
    const newArr = [];
    data.forEach((item, i) => {
        let hn = '';
        let index = item.split('#').length - 1;
        if ( i === 0 || !orderArr[index-1] || item.split('#').length > data[i-1].split('#').length ) {
            orderArr[index-1] = 1;
        }
        else {
            orderArr[index-1] += 1;
        }
        for (let i = 0; i < index; i++) {
            hn += index ===1 || i === index - 1 ? orderArr[i] : orderArr[i] + '.';
        }
        newArr.push({
            title: item.split('#').pop(),
            hn
        })
    })
    return newArr;
}