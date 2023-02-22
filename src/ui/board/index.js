import {
    getClassList,
    setAttribute,
    createElement,
    querySelectorAll,
    addEventListener,
} from '../../web-api/index.js';

import {
    getState,
} from '../../state/index.js';

import {
    BOARD_PADDING,
    CELL_TO_MARGIN_RATIO,
} from '../../consts.js';

const setCellDimensions = (cell, { width, height, margin }) => {
    cell.style.setProperty('width', width);
    cell.style.setProperty('height', height);
    cell.style.setProperty('margin', margin);
};

// TODO consider testing it
const calculateCellDimensions = (board) => {
    const rowCount = board.length;
    const units = window.innerWidth < window.innerHeight ? 'vw' : 'vh';
    // assuming for now that rowCount === columnCount always
    const cellSize = Math.floor((100 - 2 * BOARD_PADDING - (rowCount - 1) * CELL_TO_MARGIN_RATIO * 2) / rowCount);
    const margin = cellSize * CELL_TO_MARGIN_RATIO + units;

    return {
        margin,
        width: cellSize + units,
        height: cellSize + units,
    };
};

// TODO implement + tests
const onCellClick = (e) => console.log(e);

/**
 * Creates new board component, according to a current state.
 */
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
            setAttribute(cell, 'row_index', r);
            setAttribute(cell, 'column_index', c);
            addEventListener(cell, 'click', onCellClick);
            setCellDimensions(cell, calculateCellDimensions(board));
            getClassList(cell).add('cell');
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
    return container;
};

/**
 * Callback for window.onresize, to keep cell sizes correct.
 */
export const resizeBoard = () => {
    querySelectorAll('.cell')
        .forEach((cell) => {
            const { board } = getState();
            setCellDimensions(cell, calculateCellDimensions(board));
        });
};
