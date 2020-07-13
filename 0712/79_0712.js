// 79. 单词搜索
// 给定一个二维网格和一个单词，找出该单词是否存在于网格中。

// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const w_len = word.length;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (word[0] === board[i][j] && check(board, word, i, j, 0, {})){
                return check(board, word, i, j, 0, {});
            }
        }
    }
    return false;
};

var check = function(board, word, i, j, index, obj) {
    const key = i + '-' + j;
    if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || obj[key] || word[index] !== board[i][j]) {
        return false;
    };
    obj[key] = 1;           
    index++;
    if (index === word.length) {
        return true;
    }
    const succeed = check(board, word, i - 1, j, index, obj) || check(board, word, i + 1, j, index, obj) || check(board, word, i, j - 1, index, obj) || check(board, word, i, j + 1, index, obj)
    obj[key] = succeed;
    return succeed;
}