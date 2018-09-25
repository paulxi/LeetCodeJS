const numIslands = function(grid) {
    const rows = grid.length;
    if (rows === 0) {
        return 0;
    }
    const cols = grid[0].length;

    const checkNeighbor = (row, col) => {
        if (row < 0 || row >= rows || col < 0 || col >= cols ||
            grid[row][col] === '0') {
            return;
        }

        grid[row][col] = '0';
        checkNeighbor(row - 1, col);
        checkNeighbor(row + 1, col);
        checkNeighbor(row, col - 1);
        checkNeighbor(row, col + 1);
    };

    let num = 0;
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === '1') {
                num++;
                checkNeighbor(row, col);
            }
        }
    }

    return num;
};

module.exports = numIslands;

