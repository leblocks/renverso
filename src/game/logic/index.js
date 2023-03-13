/**
 * Flips cells on a board accroding to provided row, col and pattern.
 * @param {number} row Row number on a board.
 * @param {number} column Column number on a board.
 * @param {PatternCallback} pattern - The way of flipping.
 * @param {bool[][]} board Array of booleans representing current board state.
 * @return {bool[][]} A new board with flipped cells.
 */
export const flipCells = (row, column, pattern, board) => {
    // deep copy
    const flippedBoard = board.map(r => r.map(c => c));
    pattern(row, column)
        .forEach(([r, c]) => {
            flippedBoard[r][c] = !board[r][c];
        });
    return flippedBoard;
};
