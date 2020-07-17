// 406. 根据身高重建队列
// 假设有打乱顺序的一群人站成一个队列。 每个人由一个整数对(h, k)表示，其中h是这个人的身高，k是排在这个人前面且身高大于或等于h的人数。 编写一个算法来重建这个队列。

// 注意：
// 总人数少于1100人。

// 示例

// 输入:
// [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

// 输出:
// [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]


/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people = sortQueue(people);
    const list = [];
    for (let i = 0; i < people.length; i++) {
        list.splice(people[i][1], 0, people[i]);
    }
    return list;
};

var sortQueue = function(list){
    return list.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        } else {
            return b[0] - a[0];
        }
    });
    
}