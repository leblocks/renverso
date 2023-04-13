import { WHOLE_CROSS_PATTERN } from '../pattern/const.js';

import { flipCells } from '../logic/index.js';

import {
    setState,
    setStateSilently,
} from '../../state/index.js';

/**
 * @typedef {Object} Level
 * @property {bool[][]} board Board representing current level.
 * @property {number[][]} solution Array of coordinates with solution for current
 * board with current pattern.
 * @property {string} pattern Name of the pattern.
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

export const LEVEL_EASY = createLevelDifficulty(4, 4, 0, WHOLE_CROSS_PATTERN);
export const LEVEL_MEDIUM = createLevelDifficulty(5, 5, 10, WHOLE_CROSS_PATTERN);
export const LEVEL_HARD = createLevelDifficulty(7, 7, 20, WHOLE_CROSS_PATTERN);

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

/**
 * Creates random level which requires at least 'stepsToSolve' to be solved.
 * @param {LevelDifficulty} level Required level difficulty.
 * @param {string} patternName - Name of the flipping pattern.
 * @returns {Level} New game level.
 */
export const getLevel = ({
    rows, columns, stepsToSolve, pattern,
}) => {
    // create initial solved board
    let board = [...Array(rows)].map(() => Array(columns).fill(true));
    // click 'stepsToSolve' times on board to create shuffled one
    const solution = getRandomCoordinates(stepsToSolve, rows, columns);

    // shuffle board
    for (let i = 0; i < solution.length; i += 1) {
        const [r, c] = solution[i];
        board = flipCells(r, c, pattern, board);
    }

    return { board, solution, pattern };
};

/**
 * Initializes game state with level of required difficulty.
 * @param {LevelDifficulty} level Required level difficulty.
 */
export const initRandomLevel = (difficulty) => {
    const { board, solution, pattern } = getLevel({ ...difficulty });
    setState({ solution, pattern, currentLevelId: 0,  moves: [] });
    // there may be listeners from previous board, those are being cleaned in board creation
    // so we don't want to trigger them before it will be cleaned. Not a cool maneuver
    setStateSilently({ board });
};


// pre-defined levels
const levels = [
    {
        id: 10,
        board: [
            [false, true, true, true],
            [false, true, true, true],
            [false, true, true, true],
            [false, false, false, false],
        ],
        solution: [[3, 0]],
        pattern: WHOLE_CROSS_PATTERN,
    },
    {
        id: 20,
        board: [
            [false, true, true, false],
            [true, true, true, true],
            [true, true, true, true],
            [false, true, true, false],
        ],
        solution: [[3, 0], [0, 0], [0, 3], [3, 3]],
        pattern: WHOLE_CROSS_PATTERN,
    },
    {
        id: 30,
        board: [
            [true, true, true, true],
            [true, false, false, true],
            [true, false, false, true],
            [true, true, true, true],
        ],
        solution: [[1, 1], [1, 2], [2, 2], [2, 1]],
        pattern: WHOLE_CROSS_PATTERN,
    },
    {
        id: 40,
        board: [
            [true, false, true, true],
            [false, true, true, true],
            [true, true, true, false],
            [true, true, false, true],
        ],
        solution: [[1, 0], [2, 3], [3, 2], [0, 1]],
        pattern: WHOLE_CROSS_PATTERN,
    },
    {
        id: 50,
        board: [
            [true, true, true, false],
            [true, true, false, true],
            [true, false, true, true],
            [false, true, true, true],
        ],
        solution: [[3, 0], [2, 1], [1, 2], [0, 3]],
        pattern: WHOLE_CROSS_PATTERN,
    },
];

/**
 * @typedef {Object} PredefinedLevelType
 * @property {number} id Level id.
 * @typedef {PredefinedLevelType & Level} PredefinedLevel
 */

/**
 * Returns all predefined levels.
 * @returns {PredefinedLevel[]} Array with all predefined levels.
 */
export const getPredefinedLevels = () => levels;

/**
 * Initializes game state with provided level.
 * @param {PredefinedLevel} level Level to initialize.
 */
export const initPredefinedLevel = (level) => {
    const { board, solution, pattern, id } = level;
    setState({ solution, pattern, currentLevelId: id, moves: [] });
    // there may be listeners from previous board, those are being cleaned in board creation
    // so we don't want to trigger them before it will be cleaned. Not a cool maneuver
    setStateSilently({ board });
};
