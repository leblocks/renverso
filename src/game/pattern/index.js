/**
 * Provides flipping pattern.
 * @callback PatternCallback
 * @param {number} x - X coordinate of the cell to flip on a board.
 * @param {number} y - Y coordinate of the cell to flip on a board.
 * @param {number[][]} Array of cells to flip on a board.
 */

/**
 * Provides "whole cross" pattern. Where together with flipped cell whole row
 * and column gets flipped.
 * @param {number} width Number of columns in game board.
 * @param {number} height Number of rows in game board.
 * @returns {PatternCallback} Whole cross pattern method.
 */
export const wholeCrossPatternProvider = (width, height) => (x, y) => {
    const cellsToFlip = [];

    for (let i = 0; i < height; i += 1) {
        cellsToFlip.push([i, x]);
    }

    for (let i = 0; i < width && i !== x; i += 1) {
        cellsToFlip.push([y, i]);
    }
    return cellsToFlip;
};

/**
 * Provides "small cross" pattern. Where together with flipped cell neightbors
 * from top, bottom, left and right are getting flipped.
 * @param {number} width Number of columns in game board.
 * @param {number} height Number of rows in game board.
 * @returns {PatternCallback} Small cross pattern method.
 */
export const smallCrossPatternProvider = (width, height) => (x, y) => {
    const offsets = [[0, 0], [-1, 0], [-1, -1], [1, 0], [1, 1]];

    return offsets
        .filter((coord) => ((coord[0] + y) < height) && ((coord[1] + x) < width))
        .map((coord) => [coord[0] + y, coord[1] + x]);
};
