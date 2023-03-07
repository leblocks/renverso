// use pseudo random instead
const getRandomInt = (max) => Math.floor(Math.random(42) * max);

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
 * Creates array with random coordinates on a board, without duplicates.
 *
 * @param {number} count Number of coordinates to create.
 * @returns {number[][]} Arrays with generated coordinates.
 */
export const getRandomCoordinates = (count, rows, columns) => {
    const hasDuplicate = (arr, [row, col]) => arr.some(([r, c]) => r === row && c === col);
    const getRandomCoordinate = () => [getRandomInt(rows), getRandomInt(columns)];

    const coords = [];
    for (let i = 0; i < count; i += 1)
    {
        let coord = getRandomCoordinate();
        while (hasDuplicate(coords, coord)) {
            coord = getRandomCoordinate();
        }
        coords.push(coord);
    }

    return coords;
};

export * from './pattern/index.js';
