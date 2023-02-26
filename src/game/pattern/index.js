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
export const wholeCrossPatternProvider = (rows, columns) => (r, c) => {
    // TODO fix!
    const cellsToFlip = [];

    for (let i = 0; i < columns; i += 1) {
        cellsToFlip.push([i, r]);
    }

    for (let i = 0; i < rows; i += 1) {
        if (i !== r) { // avoid cell duplicate
            cellsToFlip.push([c, i]);
        }
    }
    return cellsToFlip;
};

/**
 * Provides "small cross" pattern. Where together with flipped cell neightbors
 * from top, bottom, left and right are getting flipped.
 * @param {number} rows Number of rows in game board.
 * @param {number} columns Number of columns in game board.
 * @returns {PatternCallback} Small cross pattern method.
 */
export const smallCrossPatternProvider = (rows, columns) => (r, c) => {
    // TODO fix!
    const offsets = [[0, 0], [-1, 0], [1, 0], [0, -1], [0, 1]];

    return offsets
        // filter out of bound coords
        .filter((coord) => ((coord[0] + c) < columns) && ((coord[1] + r) < rows))
        .filter((coord) => ((coord[0] + c) >= 0) && ((coord[1] + r) >= 0))
        .map((coord) => [coord[0] + c, coord[1] + r]);
};
