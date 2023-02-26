import {
    getClassList,
    getAttribute,
    setAttribute,
    createElement,
    querySelectorAll,
    addEventListener,
} from '../../web-api/index.js';

import {
    getState,
    setState,
    addStateObserver,
} from '../../state/index.js';

import {
    ROW_INDEX,
    COLUMN_INDEX,
    BOARD_PADDING,
    CELL_TO_MARGIN_RATIO,
} from '../../consts.js';

const setCellDimensions = (cell, { width, height, margin }) => {
    cell.style.setProperty('width', width);
    cell.style.setProperty('height', height);
    cell.style.setProperty('margin', margin);
};

const calculateCellDimensions = (board) => {
    const rowCount = board.length;
    const units = window.innerWidth < window.innerHeight ? 'vw' : 'vh';
    // assuming for now that rowCount === columnCount always
    const cellSize = Math.floor((100 - 2 * BOARD_PADDING - (rowCount - 1) * CELL_TO_MARGIN_RATIO * 2) / rowCount);
    const margin = cellSize * CELL_TO_MARGIN_RATIO + units;

    return { margin, width: cellSize + units, height: cellSize + units, };
};

// TODO tests
/**
 * @param {Event} e On click event.
 */
const onCellClick = ({ target }) => {
    const { board, pattern } = getState();
    const row = parseInt(getAttribute(target, ROW_INDEX));
    const col = parseInt(getAttribute(target, COLUMN_INDEX));

    for (let coords of pattern(row, col)) {
        board[coords[0]][coords[1]] = !board[coords[0]][coords[1]];
    }

    setState({ board, });
};

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

        // build cells in the row
        for (let c = 0; c < board[r].length; c += 1) {
            const cell = createElement('div');
            getClassList(cell).add('cell');
            setAttribute(cell, ROW_INDEX, r);
            setAttribute(cell, COLUMN_INDEX, c);
            addEventListener(cell, 'click', onCellClick);
            setCellDimensions(cell, calculateCellDimensions(board));

            addStateObserver(['board'], ({ board }) => {
                // TODO use color theme here
                const color = board[r][c] ? 'black' : 'white';
                cell.style.setProperty('background-color', color);
            });

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
