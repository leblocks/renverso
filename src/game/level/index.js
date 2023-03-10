/**
 * @typedef {Object} Level
 * @property {bool[][]} board Board representing current level.
 * @property {number[][]} solution Array of coordinates with solution for current
 * board with current pattern.
 * @property {PatternCallback} pattern Flipping pattern for current board.
 */

/**
 * Creates random level which requires at least 'stepsToSolve' to be solved.
 * @param {number} rows Number of rows on the board.
 * @param {number} columns Number of columns on the board.
 * @param {number} stepsToSolve Amount of turns required to solve resulting level.
 * @param {PatternCallback} pattern - The way of flipping.
 * @returns {Level} New game level.
 */
export const getLevel = (rows, columns, stepsToSolve, pattern) => {
    // create initial solved board
    const board = [...Array(rows)].map(() => Array(columns).fill(true));
    // click 'stepsToSolve' times on board to create shuffled one
    const solution = getRandomCoordinates(stepsToSolve, rows, columns);
    // shuffle board
    solution.forEach(([r, c]) => flipCells(r, c, pattern, board)); 

    return { board, solution, pattern, };
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
            board[r][c] = !board[r][c];
        });
};
