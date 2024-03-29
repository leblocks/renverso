import {
    WHOLE_CROSS_PATTERN,
    SMALL_CROSS_PATTERN,
    INVERTED_CROSS_PATTERN,
    RANDOM_PATTERN,
} from './const.js';

/**
 * Provides flipping pattern.
 * @callback PatternCallback
 * @param {number} r - Row number of the cell to flip on a board.
 * @param {number} c - Column number of the cell to flip on a board.
 * @param {number[][]} Array of cells to flip on a board.
 */

/**
 * Provides "whole cross" pattern. Where together with flipped cell whole row
 * and column gets flipped.
 * @param {number} rows Number of  rows in game board.
 * @param {number} columns Number of columns in game board.
 * @returns {PatternCallback} Whole cross pattern method.
 */
export const wholeCrossPatternProvider = (rows, columns) => (row, col) => {
    const cellsToFlip = [];

    for (let i = 0; i < rows; i += 1) {
        cellsToFlip.push([i, col]);
    }

    for (let i = 0; i < columns; i += 1) {
        // do not insert original cell twice
        if (!cellsToFlip.some(([r, c]) => r === row && c === i)) {
            cellsToFlip.push([row, i]);
        }
    }
    return cellsToFlip;
};

/**
 * Provides "small cross" pattern. Where together with flipped cell neighbors
 * from top, bottom, left and right are getting flipped.
 * @param {number} rows Number of rows in game board.
 * @param {number} columns Number of columns in game board.
 * @returns {PatternCallback} Small cross pattern method.
 */
export const smallCrossPatternProvider = (rows, columns) => (row, col) => {
    const offsets = [[0, 0], [-1, 0], [1, 0], [0, -1], [0, 1]];
    return offsets
        // filter out of bound coords
        .filter((coord) => ((coord[0] + row) < rows) && ((coord[1] + col) < columns))
        .filter((coord) => ((coord[0] + row) >= 0) && ((coord[1] + col) >= 0))
        .map((coord) => [coord[0] + row, coord[1] + col]);
};

/**
 * Provides "inverted cross" pattern. Where together with flipped cell neighbors
 * from top, bottom, left and right are getting flipped.
 * @param {number} rows Number of rows in game board.
 * @param {number} columns Number of columns in game board.
 * @returns {PatternCallback} Small cross pattern method.
 */
export const invertedCrossPatternProvider = (rows, columns) => (row, col) => {
    const offsets = [[0, 0], [-1, -1], [-1, 1], [1, -1], [1, 1]];
    return offsets
        // filter out of bound coords
        .filter((coord) => ((coord[0] + row) < rows) && ((coord[1] + col) < columns))
        .filter((coord) => ((coord[0] + row) >= 0) && ((coord[1] + col) >= 0))
        .map((coord) => [coord[0] + row, coord[1] + col]);
};

const patterns = {
    [WHOLE_CROSS_PATTERN]: wholeCrossPatternProvider,
    [SMALL_CROSS_PATTERN]: smallCrossPatternProvider,
    [INVERTED_CROSS_PATTERN]: invertedCrossPatternProvider,
    [RANDOM_PATTERN]: (rows, columns) => {
        const names = Object.keys(patterns).filter((k) => k !== RANDOM_PATTERN);
        const randomPatternName = names[Math.floor((Math.random() * names.length))];
        return patterns[randomPatternName](rows, columns);
    },
};

/**
 * Provides pattern, from existing ones.
 * @param {string} name Pattern name.
 * @returns {PatternCallback} Small cross pattern method.
 */
export const getPatternByName = (name) => patterns[name];
