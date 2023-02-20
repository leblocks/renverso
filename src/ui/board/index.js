import {
    getClassList,
    createElement,
    querySelectorAll,
} from '../../web-api/index.js';

import {
    getState,
} from '../../state/index.js';

const setCellDimensions = (cell, { width, height, margin }) => {
    cell.style.setProperty('width', width);
    cell.style.setProperty('height', height);
    cell.style.setProperty('margin', margin);
};

// TODO jsdoc, finish method
export const calculateCellDimensions = (board) => {
    const [rowCount, columnCount] = [board.length, board[0].length];

    const width = Math.floor(100 / columnCount);
    const height = Math.floor(100 / rowCount);

    return { width: `${width}vh`, height: `${height}vh`, margin: '1vh' };
};

// TODO jsdoc
export const initBoard = () => {
    const container = createElement('div');
    getClassList(container).add('board');

    const { board } = getState();
    // build row
    for (let r = 0; r < board.length; r += 1) {
        const row = createElement('div');
        getClassList(row).add('row');

        // build cells
        for (let c = 0; c < board[r].length; c += 1) {
            const cell = createElement('div');
            setCellDimensions(cell, calculateCellDimensions(board));
            getClassList(cell).add('cell');
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
    return container;
};

// TODO jsdoc
export const resizeBoard = () => {
    querySelectorAll('.cell')
        .forEach((cell) => {
            const { board } = getState();
            setCellDimensions(cell, calculateCellDimensions(board));
        });
};
