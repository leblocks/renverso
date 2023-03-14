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

/**
 * @typedef {Object} MoveResult
 * @property {bool[][]} board New board state.
 * @property {number[][]} moves Updated array with player moves on a current board.
 */

/**
 * Main game logic happens during click on a cell.
 * @param {number} row Row number on a board.
 * @param {number} column Column number on a board.
 * @param {Object} state Current game state.
 * @returns {MoveResult} Updated game state as result from making a move.
 */
export const makeMove = (row, col, { board, pattern, moves }) => {
    return {
        board: flipCells(row, col, pattern, board),
        moves: [...moves, [row, col]],
    };
};

/**
 * Undoes player last move if there was any.
 * @param {Object} state Current game state.
 * @returns {MoveResult} Updated game state as result from making a move.
 */
export const undoMove = ({ board, pattern, moves }) => {
    if (moves.length === 0) {
        // do nothing
        return { board, moves };
    }

    const newMoves = [...moves];
    const [row, col] = newMoves.pop();

    return {
        board: flipCells(row, col, pattern, board),
        moves: newMoves,
    };
};
