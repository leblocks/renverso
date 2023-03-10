import {
    wholeCrossPatternProvider,
    getRandomPatternProvider,
} from '../pattern/index.js';

import {
    setState,
    setStateSilently
} from '../../state/index.js';

/**
 * @typedef {Object} Level
 * @property {bool[][]} board Board representing current level.
 * @property {number[][]} solution Array of coordinates with solution for current
 * board with current pattern.
 * @property {PatternCallback} pattern Flipping pattern for current board.
 */

/**
 * @typedef {Object} LevelDifficulty
 * @property {number} rows Number of rows on a level board.
 * @property {number} columns Number of columns on a level board.
 * @property {number} stepsToSolve Number of moves to solve a level.
 * @property {PatternCallback} pattern Pattern used for level generation.
 */

const createLevelDifficulty = (rows, columns, stepsToSolve, pattern) => ({
    rows, columns, stepsToSolve, pattern,
});

export const LEVEL_EASY = createLevelDifficulty(4, 4, 5, wholeCrossPatternProvider(4, 4));
export const LEVEL_MEDIUM = createLevelDifficulty(5, 5, 10, wholeCrossPatternProvider(5, 5));
export const LEVEL_HARD = createLevelDifficulty(7, 7, 20, getRandomPatternProvider(7, 7));

/**
 * Creates array with random coordinates on a board.
 * @param {number} count Number of coordinates to create.
 * @returns {number[][]} Arrays with generated coordinates.
 */
export const getRandomCoordinates = (count, rows, columns) => {
    const getRandomInt = (max) => Math.floor(Math.random() * max);
    const getRandomCoordinate = () => [getRandomInt(rows), getRandomInt(columns)];
    return [...Array(count)].map(() => getRandomCoordinate(rows, columns));
};

// TODO move to logic
/**
 * Flips cells on a board accroding to provided row, col and pattern.
 * @param {number} row Row number on a board.
 * @param {number} column Column number on a board.
 * @param {PatternCallback} pattern - The way of flipping.
 * @param {bool[][]} board Array of booleans representing current board state.
 */
export const flipCells = (row, column, pattern, board) => {
    pattern(row, column)
        .forEach(([r, c]) => {
            // TODO fix reassignment
            board[r][c] = !board[r][c];
        });
};

/**
 * Creates random level which requires at least 'stepsToSolve' to be solved.
 * @param {LevelDifficulty} level Required level difficulty.
 * @param {PatternCallback} pattern - The way of flipping.
 * @returns {Level} New game level.
 */
export const getLevel = ({
    rows, columns, stepsToSolve, pattern,
}) => {
    // create initial solved board
    const board = [...Array(rows)].map(() => Array(columns).fill(true));
    // click 'stepsToSolve' times on board to create shuffled one
    const solution = getRandomCoordinates(stepsToSolve, rows, columns);
    // shuffle board
    solution.forEach(([r, c]) => flipCells(r, c, pattern, board));

    return { board, solution, pattern };
};

/**
 * Initializes game state with level of required difficulty.
 * @param {LevelDifficulty} level Required level difficulty.
 */
export const initLevel = (difficulty) => {
    const { board, solution, pattern } = getLevel({ ...difficulty });
    setState({ solution, pattern, moves: [] });
    // there may be listeners from previous board, those are being cleaned in board creation
    // so we don't want to trigger them before it will be cleaned. Not a cool maneuver
    setStateSilently({ board });
};
