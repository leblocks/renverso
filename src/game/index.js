
/**
 * Creates random level which requires at least 'stepsToSolve' to be solved.
 *
 * @param {number} rows Number of rows on the board.
 * @param {number} columns Number of columns on the board.
 * @param {number} stepsToSolve Amount of turns required to solve resulting level.
 * @param {PatternCallback} patternCallback - The way of flipping.
 * @returns {Object} level - New level. TODO typedef.
 */
export const getLevel = (rows, columns, stepsToSolve, patternCallback) => {
    // create initial solved board
    const board = [...Array(rows)].map(() => Array(columns).fill(true));

    // click 'stepsToSolve' times on board to create shuffled one

    return {
        board,
        solution, 
        pattern: patternCallback, // 2d array with pattenr that it was generated with
    };
};

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

export * from './pattern/index.js';
