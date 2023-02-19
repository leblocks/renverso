/**
 * Creates random level which requires at least 'stepsToSolve' to be solved.
 *
 * @param {number} width - Width of the board.
 * @param {number} height - Height of the board.
 * @param {number} stepsToSolve - Amount of turns required to solve resulting level.
 * @param {PatternCallback} patternCallback - The way of flipping.
 * @returns {Object} level - New level. TODO typedef.
 */
export const getLevel = (width, height, stepsToSolve, patternCallback) => {
    // create initial solved board
    const board = [...Array(height)].map(() => Array(width).fill(true));
    // click 'stepsToSolve' times on board to create shuffled one

    return {
        board,
        solution: [], // array with coordinates for solution
        pattern: patternCallback, // 2d array with pattenr that it was generated with
    };
};

export * from './pattern/index.js';
