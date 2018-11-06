const exist = function (board, word) {
    if (board.length === 0) {
        return false;
    }

    const rows = board.length;
    const columns = board[0].length;
    const visited = new Array(rows);
    for (let i = 0; i < rows; i++) {
        visited[i] = new Array(columns);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (search(board, word, i, j, 0, visited)) {
                return true;
            }
        }
    }

    return false;
};

const search = function (board, word, row, column, index, visited) {
    if (index === word.length) {
        return true;
    }

    const char = word.charAt(index);
    const rows = board.length;
    const columns = board[0].length;

    if (row < 0 || row === rows || columns < 0 || column === columns ||
        char !== board[row][column] || visited[row][column]) {
        return false;
    }

    visited[row][column] = true;
    if (char === board[row][column]) {
        return search(board, word, row - 1, column, index + 1, visited)
            || search(board, word, row + 1, column, index + 1, visited)
            || search(board, word, row, column - 1, index + 1, visited)
            || search(board, word, row, column + 1, index + 1, visited)
    }
    visited[row][column] = false;
    return false;
};

module.exports = exist;