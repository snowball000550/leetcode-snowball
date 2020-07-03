// 1387. 将整数按权重排序
// 我们将整数 x 的 权重 定义为按照下述规则将 x 变成 1 所需要的步数：

// 如果 x 是偶数，那么 x = x / 2
// 如果 x 是奇数，那么 x = 3 * x + 1
// 比方说，x=3 的权重为 7 。因为 3 需要 7 步变成 1 （3 --> 10 --> 5 --> 16 --> 8 --> 4 --> 2 --> 1）。

// 给你三个整数 lo， hi 和 k 。你的任务是将区间 [lo, hi] 之间的整数按照它们的权重 升序排序 ，如果大于等于 2 个整数有 相同 的权重，那么按照数字自身的数值 升序排序 。

// 请你返回区间 [lo, hi] 之间的整数按权重排序后的第 k 个数。

// 注意，题目保证对于任意整数 x （lo <= x <= hi） ，它变成 1 所需要的步数是一个 32 位有符号整数。

 
 /**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
    const len = hi - lo + 1;
    const list = [];
    const help_list = [];
    for (let i = 0; i < len; i++) {
        list.push(getWeight(lo + i, 0));
        help_list.push(i);
    }
    return lo + sortList(list, help_list)[k - 1];
};

var getWeight = function(num, weight){
    const obj = {};
    while(num !== 1) {
        if (obj[num]){
            weight = obj[num];
        }
        if (num % 2 === 0){
            num = num /2;
        } else {
            num = num * 3 + 1;
        }
        weight++;
    }
    return weight
}

var sortList = function(list, h_list){
    for(let i=1; i<list.length; i++){
        for(let j=0; j<list.length-i; j++){
            if(list[j]>list[j+1]){
                h_list[j]=[h_list[j+1],h_list[j+1]=h_list[j]][0];
                list[j]=[list[j+1],list[j+1]=list[j]][0];
            }
        }
    }
    return h_list;
}