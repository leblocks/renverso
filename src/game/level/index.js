import { flipCells } from '../logic/index.js';

import {
    setState,
    setStateSilently,
} from '../../state/index.js';

import { WHOLE_CROSS_PATTERN } from '../pattern/const.js';

import { levels } from './levels.js';

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

export const LEVEL_EASY = createLevelDifficulty(4, 4, 5, WHOLE_CROSS_PATTERN);
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
    setState({
        solution, pattern, currentLevelId: 0, moves: [],
    });
    // there may be listeners from previous board, those are being cleaned in board creation
    // so we don't want to trigger them before it will be cleaned. Not a cool maneuver
    setStateSilently({ board });
};

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
 * Returns next uncomplete level or null if there aren't any.
 * @param {number} currentLevelId Id of the current level.
 * @param {number[]} finishedLevelIds Ids of finished levels.
 * @param {PredefinedLevel[]} allLevels All existing predefined levels.
 * @returns {PredefinedLevel} Uncomplete level or 'null' if there aren't any.
 */
export const getNextUncompleteLevel = (currentLevelId, finishedLevelIds, allLevels) => {
    const uncompleteLevels = allLevels
        .filter((level) => !finishedLevelIds.includes(level.id));

    if (uncompleteLevels.length === 0) {
        return null;
    }

    const nextLevel = uncompleteLevels.find((level) => level.id > currentLevelId);
    if (nextLevel !== undefined) {
        return nextLevel;
    }
    // first uncomplete level is ok too.
    return uncompleteLevels[0];
};

/**
 * Initializes game state with provided level.
 * @param {PredefinedLevel} level Level to initialize.
 */
export const initPredefinedLevel = (level) => {
    const {
        board, solution, pattern, id,
    } = level;
    setState({
        solution, pattern, currentLevelId: id, moves: [],
    });
    // there may be listeners from previous board, those are being cleaned in board creation
    // so we don't want to trigger them before it will be cleaned. Not a cool maneuver
    setStateSilently({ board });
};
