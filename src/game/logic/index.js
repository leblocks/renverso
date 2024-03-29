import { getPatternByName } from '../pattern/index.js';

/**
 * Flips cells on a board accroding to provided row, col and pattern.
 * @param {number} row Row number on a board.
 * @param {number} column Column number on a board.
 * @param {string} patternName - Name of the pattern.
 * @param {bool[][]} board Array of booleans representing current board state.
 * @return {bool[][]} A new board with flipped cells.
 */
export const flipCells = (row, column, patternName, board) => {
    const pattern = getPatternByName(patternName)(board.length, board[0].length);
    // deep copy
    const flippedBoard = board.map((r) => r.map((c) => c));
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
export const makeMove = (row, col, { board, pattern, moves }) => ({
    board: flipCells(row, col, pattern, board),
    moves: [...moves, [row, col]],
});

/**
 * Undoes player last move if there was any.
 * @param {Object} state Current game state.
 * @returns {MoveResult} Updated game state as result from undoing a move.
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

/**
 * Undoes all player moves if there were any.
 * @param {Object} state Current game state.
 * @returns {MoveResult} Updated game state as result from resetting board.
 */
export const resetBoard = ({ board, pattern, moves }) => {
    let newMoves = [...moves];
    let newBoard = board.map((row) => row.map((cell) => cell));

    while (newMoves.length > 0) {
        const updated = undoMove({ board: newBoard, pattern, moves: newMoves });
        newBoard = updated.board;
        newMoves = updated.moves;
    }
    return { board: newBoard, moves: newMoves };
};

/**
 * Checks if board is solved.
 * @param {bool[][]} board Array of booleans representing current board state.
 * @returns {boolean} true if board is sovled.
 */
export const isBoardSolved = (board) => board.every((row) => row.every((cell) => cell));
